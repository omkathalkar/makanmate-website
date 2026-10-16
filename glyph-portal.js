/**
 * Glyph Portal © 2026 Christian Katzmann. MIT.
 * Origin: UsefulPortal.astro on https://ktzm.dk → UsefulPortal.tsx → ClarityPortal.tsx.
 * A scroll-driven camera through live type. Keep this notice with copies.
 *
 * Plain-JavaScript port of the 21st.dev "glyph-portal" React component, so it runs
 * in the existing static site with no build step. Behaviour matches the original;
 * only the way it is mounted differs.
 *
 * Markup:
 *   <section data-glyph-portal data-word="MAKANMATE" data-font-weight="800"
 *            data-scroll-length="2.4" data-enter-label="See the four promises">
 *     <template data-gp-front> ...optional text drawn over the opening frame... </template>
 *     ...everything else becomes the section that is revealed after the zoom...
 *   </section>
 *
 * Options (data attributes): data-word, data-focus-char, data-interactive ("false" to
 * turn letter choosing off), data-scroll-length (1 to 8 screens), data-font-family,
 * data-font-weight, data-annotations, data-enter-label.
 * Events: the section dispatches "gp:progress" with detail { progress } on each frame.
 */
(function () {
  "use strict";

  var DEFAULT_FONT = '"Arial Black", "Arial", sans-serif';
  var SVG_NS = "http://www.w3.org/2000/svg";

  function clamp(n, a, b) {
    a = a === undefined ? 0 : a;
    b = b === undefined ? 1 : b;
    return Math.min(b, Math.max(a, n));
  }
  function smooth(a, b, n) {
    var t = clamp((n - a) / (b - a));
    return t * t * (3 - 2 * t);
  }
  function svg(tag, attrs) {
    var node = document.createElementNS(SVG_NS, tag);
    for (var k in attrs) node.setAttribute(k, attrs[k]);
    return node;
  }
  function html(tag, attrs, text) {
    var node = document.createElement(tag);
    for (var k in attrs) node.setAttribute(k, attrs[k]);
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /** Largest opaque square, in linear time. Unlike a stem guess, it works in O, S and Ø. */
  function interior(context, char, font) {
    var canvas = context.canvas;
    context.font = font;
    var m = context.measureText(char);
    var pad = 8;
    var left = Math.ceil(m.actualBoundingBoxLeft);
    var ascent = Math.ceil(m.actualBoundingBoxAscent);
    canvas.width = Math.max(1, Math.ceil(m.actualBoundingBoxLeft + m.actualBoundingBoxRight) + pad * 2);
    canvas.height = Math.max(1, Math.ceil(m.actualBoundingBoxAscent + m.actualBoundingBoxDescent) + pad * 2);
    context.font = font;
    context.fontKerning = "none";
    context.fillText(char, pad + left, pad + ascent);
    var width = canvas.width, height = canvas.height;
    var pixels = context.getImageData(0, 0, width, height).data;
    var rows = new Uint16Array(width + 1);
    var size = 0, bx = 0, by = 0;
    for (var y = 0; y < height; y++) {
      var diagonal = 0;
      for (var x = 0; x < width; x++) {
        var above = rows[x + 1];
        rows[x + 1] = pixels[(y * width + x) * 4 + 3] > 245 ? Math.min(above, rows[x], diagonal) + 1 : 0;
        diagonal = above;
        if (rows[x + 1] > size) { size = rows[x + 1]; bx = x; by = y; }
      }
    }
    if (size < 3) return null;
    // Scan at 3x SVG size. Inscribe a disk in the square, with room for raster disagreement.
    return {
      x: (bx + 1 - size / 2 - pad - left) / 3,
      y: (by + 1 - size / 2 - pad - ascent) / 3,
      radius: (size / 2 - 1) / 3,
    };
  }

  function scrollParent(element) {
    for (var p = element.parentElement; p; p = p.parentElement) {
      if (/(auto|scroll|hidden)/.test(getComputedStyle(p).overflowY) && p !== document.body && p !== document.documentElement) return p;
    }
    return null;
  }

  var counter = 0;

  function mount(section) {
    var uid = section.id || "gp" + ++counter;
    section.id = uid;
    var clipId = uid + "-clip";
    var data = section.dataset;
    var text = (data.word || "SUBLIME").trim().normalize("NFC") || "SUBLIME";
    var focusChar = data.focusChar || "";
    var interactive = data.interactive !== "false";
    var annotations = data.annotations === "true";
    var fontFamily = data.fontFamily || DEFAULT_FONT;
    var enterLabel = data.enterLabel || "Enter section";
    var length = isFinite(parseFloat(data.scrollLength)) ? clamp(parseFloat(data.scrollLength), 1, 8) : 2.4;
    var weight = isFinite(parseFloat(data.fontWeight)) ? clamp(parseFloat(data.fontWeight), 1, 1000) : 900;

    var characters = [];
    var characterOffset = 0;
    Array.from(text).forEach(function (char) {
      characters.push({ char: char, index: characterOffset });
      characterOffset += char.length;
    });

    // ---- build the structure; the original children become the revealed section ----
    var template = section.querySelector("template[data-gp-front]");
    var frontNode = template ? template.content.cloneNode(true) : null;
    var hasFront = !!frontNode;
    var kids = Array.prototype.slice.call(section.childNodes).filter(function (n) { return n !== template; });
    if (template) template.remove();

    var viewport = html("div", { "data-gp-viewport": "", "aria-hidden": "true" });
    var pin = html("div", { "data-gp-pin": "" });
    var field = html("div", { "data-gp-field": "", "aria-hidden": "true" });
    field.inert = true;
    var defaultField = html("div", { "data-gp-default-field": "" });
    field.appendChild(defaultField);

    var art = svg("svg", { "data-gp-art": "", "aria-hidden": "true", focusable: "false" });
    var defs = svg("defs", {});
    var clip = svg("clipPath", { id: clipId, clipPathUnits: "userSpaceOnUse" });
    var glyph = svg("text", { "data-gp-glyph": "", x: "0", y: "0" });
    glyph.textContent = text;
    glyph.style.fontFamily = fontFamily;
    glyph.style.fontWeight = String(weight);
    glyph.style.fontSize = "100px";
    glyph.style.fontKerning = "none";
    glyph.style.fontVariantLigatures = "none";
    glyph.style.letterSpacing = "0";
    clip.appendChild(glyph);
    defs.appendChild(clip);
    var marks = svg("g", { "data-gp-marks": "" });
    marks.style.visibility = annotations ? "visible" : "hidden";
    marks.appendChild(svg("path", {}));
    art.appendChild(defs);
    art.appendChild(marks);

    var choices = html("div", { "data-gp-choices": "", role: "radiogroup", "aria-label": "Choose the letter to enter through" });
    choices.inert = true;
    characters.forEach(function (c, i) {
      var b = html("button", {
        type: "button", role: "radio", "aria-checked": "false", tabindex: "-1",
        "data-gp-letter": String(c.index), "aria-label": (c.char.trim() ? c.char : "space") + ", letter " + (i + 1) + " of " + characters.length,
      });
      choices.appendChild(b);
    });

    var pickerLabel = html("label", { "data-gp-touch-picker": "" });
    var pickerHidden = html("span", {}, "Entry letter");
    pickerHidden.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)";
    var picker = html("select", { "data-gp-select": "" });
    var placeholder = html("option", { value: "", disabled: "" }, "Choose a letter");
    placeholder.selected = true;
    picker.appendChild(placeholder);
    characters.forEach(function (c, i) {
      picker.appendChild(html("option", { value: String(c.index) }, i + 1 + " · " + (c.char.trim() ? c.char : "space")));
    });
    pickerLabel.appendChild(pickerHidden);
    pickerLabel.appendChild(picker);

    var front = null;
    if (hasFront) {
      front = html("div", { "data-gp-front": "" });
      front.appendChild(frontNode);
    }
    var fallback = html("span", { "data-gp-fallback": "", "aria-hidden": "true" }, text);
    fallback.style.fontFamily = fontFamily;
    fallback.style.fontWeight = String(weight);

    var caption = html("div", { "data-gp-caption": "" });
    var hint = html("span", { "data-gp-hint": "", "aria-hidden": "true" }, interactive ? "Scroll to enter." : annotations ? "A passage through type" : "");
    var enter = html("a", { "data-gp-enter": "", href: "#" + uid + "-content" }, enterLabel);
    var arrow = html("span", { "aria-hidden": "true" }, "↘");
    enter.appendChild(arrow);
    caption.appendChild(hint);
    caption.appendChild(enter);

    [field, art, choices, pickerLabel].forEach(function (n) { pin.appendChild(n); });
    if (front) pin.appendChild(front);
    pin.appendChild(fallback);
    pin.appendChild(caption);

    var content = html("div", { "data-gp-content": "", id: uid + "-content", tabindex: "-1" });
    kids.forEach(function (n) { content.appendChild(n); });

    section.classList.add("gp");
    section.setAttribute("aria-label", text);
    section.style.setProperty("--gp-length", String(length));
    section.style.setProperty("--gp-characters", String(Array.from(text).length));
    section.appendChild(viewport);
    section.appendChild(pin);
    section.appendChild(content);

    // ---- the camera ----
    var buttons = Array.prototype.slice.call(choices.querySelectorAll("button"));
    var root = scrollParent(section);
    var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d", { willReadFrequently: true });
    var disposed = false, raf = 0, dirty = true, active = true, ready = false;
    var mountedAt = performance.now();
    var browserFrameSeen = false, stalled = false;
    var W = 1, H = 1, travel = 1, startScale = 1, endScale = 1, anchorY = 0;
    var center = { x: 0, y: 0 }, target = null;
    var lastProgress = -1;
    var candidates = [], letters = [];
    var choosing = false;
    var bounds = { x: 0, y: 0, width: 1, height: 1 };
    var fontDirty = true;

    // Freeze an available face for this mount. Late font swaps move the ink under the camera.
    var computedFamily = getComputedStyle(glyph).fontFamily;
    var families = computedFamily.match(/(?:[^,"']+|"[^"]*"|'[^']*')+/g) || [];
    var available = families.filter(function (family) {
      try { return document.fonts.check(weight + " 100px " + family.trim(), text); }
      catch (e) { return false; }
    });
    glyph.style.fontFamily = available.concat([DEFAULT_FONT]).join(",");
    // A pending requested face may also hold WebKit's render loop. Keep that mount static.
    stalled = available.length < families.length;

    function readInk() {
      if (!context) return false;
      var font = getComputedStyle(glyph);
      var scanFont = font.fontWeight + " 300px " + font.fontFamily;
      context.font = font.fontWeight + " 100px " + font.fontFamily;
      context.fontKerning = "none";
      var metrics = context.measureText(text);
      var advances = [];
      for (var i = 0; i < text.length; i++) advances.push(context.measureText(text.slice(0, i)).width);
      // SVG getBBox includes the font's line box in some engines. Frame visible ink instead.
      bounds = {
        x: -metrics.actualBoundingBoxLeft, y: -metrics.actualBoundingBoxAscent,
        width: metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight,
        height: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent,
      };
      if (!bounds.width || !bounds.height) return false;
      center = { x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2 };
      var requested = focusChar ? text.indexOf(focusChar.normalize("NFC")) : -1;
      var offset = 0;
      candidates = []; letters = [];
      Array.from(text).forEach(function (char) {
        context.font = font.fontWeight + " 100px " + font.fontFamily;
        var m = context.measureText(char);
        letters.push({
          index: offset, x: advances[offset] - m.actualBoundingBoxLeft, y: -m.actualBoundingBoxAscent,
          width: m.actualBoundingBoxLeft + m.actualBoundingBoxRight,
          height: m.actualBoundingBoxAscent + m.actualBoundingBoxDescent,
        });
        var found = interior(context, char, scanFont);
        if (found) candidates.push({ x: found.x + advances[offset], y: found.y, radius: found.radius, index: offset });
        offset += char.length;
      });
      var wanted = candidates.filter(function (c) { return c.index === requested; })[0];
      var sorted = candidates.slice().sort(function (a, b) {
        return b.radius - a.radius || Math.abs(a.x - center.x) - Math.abs(b.x - center.x);
      });
      target = wanted || sorted[0] || null;
      return true;
    }

    function hasCandidate(index) {
      return candidates.some(function (c) { return c.index === index; });
    }

    function select(next) {
      target = next;
      endScale = target ? Math.max(startScale, Math.hypot(W, H) / (target.radius * 1.35)) : startScale;
      section.dataset.gpFocus = target ? Array.from(text.slice(target.index))[0] : "";
      section.dataset.gpFocusIndex = String(target ? target.index : -1);
      buttons.forEach(function (button) {
        var idx = Number(button.dataset.gpLetter);
        var selected = idx === (target ? target.index : NaN);
        button.disabled = !hasCandidate(idx);
        button.setAttribute("aria-checked", String(selected));
        button.tabIndex = selected ? 0 : -1;
      });
      if (picker.value !== "") picker.value = String(target ? target.index : -1);
      Array.prototype.forEach.call(picker.options, function (option) {
        option.disabled = option.value === "" || !hasCandidate(Number(option.value));
      });
      var u = 1 / startScale;
      var y = bounds.y + bounds.height + 25 * u;
      var x = bounds.x;
      var right = x + bounds.width;
      var cross = target ? "M" + (target.x - 9 * u) + " " + target.y + "h" + 18 * u + "M" + target.x + " " + (target.y - 9 * u) + "v" + 18 * u : "";
      var annotationPath = marks.querySelector("path");
      annotationPath.setAttribute("d", "M" + x + " " + y + "H" + right + "M" + x + " " + (y - 5 * u) + "v" + 10 * u + "M" + right + " " + (y - 5 * u) + "v" + 10 * u + cross);
      annotationPath.setAttribute("stroke-width", String(u));
    }

    function position() {
      var origin = root ? root.getBoundingClientRect().top + root.clientTop : 0;
      return clamp((origin - section.getBoundingClientRect().top) / travel);
    }

    function paint(progress) {
      var isStatic = motion.matches || !browserFrameSeen || stalled || !target;
      var p = isStatic ? 0 : progress;
      var t = clamp(p / 0.78);
      var eased = t < 0.5 ? 4 * Math.pow(t, 3) : 1 - Math.pow(-2 * t + 2, 3) / 2;
      var scale = Math.exp(Math.log(startScale) + Math.log(endScale / startScale) * eased);
      var blend = endScale === startScale ? 0 : (1 / scale - 1 / startScale) / (1 / endScale - 1 / startScale);
      var tx = target ? target.x : center.x, ty = target ? target.y : center.y;
      var cx = center.x + (tx - center.x) * blend;
      var cy = center.y + (ty - center.y) * blend;
      var roll = -4 * smooth(0.06, 0.5, t) * (1 - smooth(0.62, 0.92, t));
      var transform = "translate(" + W / 2 + " " + (anchorY + H * 0.04 * eased) + ") scale(" + scale + ") rotate(" + roll + ") translate(" + -cx + " " + -cy + ")";
      // Keep scale on the clip to avoid text paint limits. Text-local translation
      // follows page zoom in WebKit; translation on an HTML clip reference does not.
      var radians = roll * Math.PI / 180;
      var dx = W / 2 / scale, dy = (anchorY + H * 0.04 * eased) / scale;
      clip.setAttribute("transform", "scale(" + scale + ") rotate(" + roll + ")");
      glyph.setAttribute("transform", "translate(" + (Math.cos(radians) * dx + Math.sin(radians) * dy - cx) + " " + (-Math.sin(radians) * dx + Math.cos(radians) * dy - cy) + ")");
      marks.setAttribute("transform", transform);
      marks.style.opacity = String(1 - smooth(0.015, 0.17, p));
      choosing = interactive && !isStatic && p < 0.04;
      choices.inert = !choosing;
      section.dataset.gpChoosing = String(choosing);
      // Drop the clip only after the camera has already filled the viewport with ink.
      field.style.clipPath = t >= 1 ? "none" : "url(#" + clipId + ")";
      section.style.setProperty("--gp-caption", String(1 - smooth(0.01, 0.16, p)));
      section.style.setProperty("--gp-reveal", String(isStatic ? 1 : smooth(0.78, 0.9, p)));
      section.style.setProperty("--gp-field-scale", String(1 + 0.16 * smooth(0, 0.82, p)));
      section.style.setProperty("--gp-caption-hit", p < 0.08 ? "auto" : "none");
      section.dataset.gpEntered = String(p >= 0.9);
      section.dataset.gpProgress = p.toFixed(5);
      if (p !== lastProgress) {
        lastProgress = p;
        section.dispatchEvent(new CustomEvent("gp:progress", { detail: { progress: p } }));
      }
    }

    function layout() {
      if (!section.clientWidth) return;
      W = pin.clientWidth;
      // A 100svh probe keeps browser chrome from continually changing the scroll distance.
      var smallViewport = viewport.offsetHeight;
      var viewportHeight = Math.max(1, Math.min(root ? root.clientHeight : smallViewport, smallViewport));
      H = motion.matches ? Math.min(viewportHeight * 0.75, 480) : viewportHeight;
      section.style.setProperty("--gp-height", H + "px");
      travel = H * length;
      art.setAttribute("viewBox", "0 0 " + W + " " + H);
      if (fontDirty) { ready = readInk(); fontDirty = false; }
      if (!ready) return;
      var wordHeight = hasFront && H < 480 ? Math.min(H * 0.38, Math.max(24, H - 264)) : H * 0.38;
      // A long word (like "ZERO BROKERAGE") would be small on a phone, so let it use more of the width there.
      var fit = W < 600 ? 0.94 : 0.84;
      startScale = Math.min(W * fit / bounds.width, wordHeight / bounds.height);
      // Vertical position of the word. On tall screens it sits at 46% of the height. On shorter ones
      // it moves up, only as far as needed to clear the header and the text stacked above it, so the
      // text, button, search card and "Popular" pills below it all fit on one screen.
      var header = document.querySelector(".site-header");
      var headerH = header ? header.getBoundingClientRect().height : 0;
      var topline = section.querySelector(".gp-topline");
      var aboveH = topline && topline.offsetHeight ? topline.offsetHeight + 24 : 0; // 24px gap above the word
      var needed = headerH + 8 + aboveH + bounds.height * startScale / 2;
      anchorY = !hasFront || H >= 860 ? H * 0.46 : Math.max(H * 0.40, needed);
      // The whole viewport fits inside measured ink, even with the small camera bank.
      select(target);
      buttons.forEach(function (button) {
        var idx = Number(button.dataset.gpLetter);
        var letter = letters.filter(function (item) { return item.index === idx; })[0];
        button.style.left = W / 2 + (letter.x - center.x) * startScale + "px";
        button.style.top = anchorY + (letter.y - center.y) * startScale - Math.max(0, 44 - letter.height * startScale) / 2 + "px";
        button.style.width = Math.max(1, letter.width * startScale) + "px";
        button.style.height = Math.max(44, letter.height * startScale) + "px";
      });
      // Left and right edges of the word, so text placed above it can line up with them.
      section.style.setProperty("--gp-word-left", Math.max(8, (W - bounds.width * startScale) / 2) + "px");
      section.style.setProperty("--gp-word-top", anchorY - bounds.height * startScale / 2 + "px");
      section.style.setProperty("--gp-word-bottom", anchorY + bounds.height * startScale / 2 + "px");
      section.dataset.gpReady = "true";
      section.dataset.gpMotion = !motion.matches && browserFrameSeen && !stalled && target ? "on" : "off";
    }

    function frame(time) {
      raf = 0;
      if (disposed) return;
      if (time !== undefined && !browserFrameSeen) {
        browserFrameSeen = true;
        stalled = stalled || performance.now() - mountedAt > 2500;
        dirty = true;
      }
      if (dirty) { dirty = false; layout(); }
      if (ready) paint(position());
    }
    function schedule() { if (!raf && active) raf = requestAnimationFrame(frame); }
    function resize() { cancelAnimationFrame(raf); dirty = true; frame(); }
    function scroll() { schedule(); }
    function candidateByIndex(i) {
      return candidates.filter(function (c) { return c.index === i; })[0];
    }
    function choose(event) {
      if (!choosing || position() >= 0.04) return;
      var button = event.target.closest ? event.target.closest("[data-gp-letter]") : null;
      var next = button ? candidateByIndex(Number(button.dataset.gpLetter)) : null;
      if (!next || next === target) return;
      select(next); paint(position());
    }
    function navigate(event) {
      if (!choosing || ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].indexOf(event.key) < 0) return;
      event.preventDefault();
      var current = candidates.indexOf(target);
      var index = event.key === "Home" ? 0 : event.key === "End" ? candidates.length - 1
        : (current + (event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 1) + candidates.length) % candidates.length;
      var wanted = candidates[index].index;
      var button = buttons.filter(function (b) { return Number(b.dataset.gpLetter) === wanted; })[0];
      if (button) button.focus({ preventScroll: true });
    }
    function pick() {
      if (!choosing || position() >= 0.04) return;
      var next = candidateByIndex(Number(picker.value));
      if (next) { select(next); paint(position()); }
    }

    choices.addEventListener("pointerover", choose);
    choices.addEventListener("click", choose);
    choices.addEventListener("focusin", choose);
    choices.addEventListener("keydown", navigate);
    picker.addEventListener("change", pick);
    var resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(section);
    if (root) resizeObserver.observe(root);
    var visibility = new IntersectionObserver(function (entries) {
      active = entries[0].isIntersecting;
      if (active) { dirty = true; schedule(); }
      else if (raf) { cancelAnimationFrame(raf); raf = 0; }
    }, { root: root, rootMargin: "100% 0px" });
    visibility.observe(section);
    (root || window).addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", resize);
    if (window.visualViewport) window.visualViewport.addEventListener("resize", resize);
    motion.addEventListener("change", resize);
    // Dropdowns placed in the opening frame get their styled menus here (see select-menu.js).
    if (window.initSelectMenus) window.initSelectMenus(section);
    // Any rotating trust card placed in the opening frame starts here (see hero-facts.js).
    if (window.initFactCycler) {
      Array.prototype.forEach.call(section.querySelectorAll(".hero-facts"), window.initFactCycler);
    }
    frame();
    // WebKit can withhold frames, timers and scroll events behind an initial hung font.
    // Begin in reading flow. Enable motion only when the browser starts rendering promptly.
    schedule();
  }

  /** Waits for the requested face (up to 1.6 s), like the original demo, then mounts. */
  function start(section) {
    var family = section.dataset.fontFamily || DEFAULT_FONT;
    var weight = section.dataset.fontWeight || "900";
    var word = section.dataset.word || "SUBLIME";
    var done = false;
    function go() {
      if (done) return;
      done = true;
      mount(section);
    }
    var wait = 1600;
    if (document.fonts && document.fonts.load) {
      var first = family.split(",")[0].trim();
      document.fonts.load(weight + " 100px " + first, word).then(go, go);
    }
    window.setTimeout(go, wait);
    if (!(document.fonts && document.fonts.load)) go();
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-glyph-portal]"), start);
})();
