/*
 * select-menu.js: replaces a native <select data-menu> with a styled dropdown.
 *
 * The real <select> stays in the page (hidden) and always holds the current
 * value, so existing code that reads select.value keeps working. Changing the
 * menu fires a normal "change" event on the select.
 *
 * Keyboard: Enter, Space or Arrow keys open it; Arrow keys, Home and End move;
 * Enter or Space picks; Escape closes and returns focus; Tab closes.
 * Screen readers: button with aria-haspopup="listbox", list with role="listbox"
 * and role="option" items.
 */
(function () {
  "use strict";

  var CHEVRON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  var CHECK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

  var openMenu = null; // the menu that is open right now, if any

  function enhance(select, index) {
    var id = select.id || "menu" + index;
    var wrap = document.createElement("div");
    wrap.className = "menu";

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "menu-btn";
    btn.id = id + "Btn";
    btn.setAttribute("aria-haspopup", "listbox");
    btn.setAttribute("aria-expanded", "false");
    var labelId = select.getAttribute("aria-labelledby");
    if (labelId) btn.setAttribute("aria-labelledby", labelId + " " + btn.id);
    var valueEl = document.createElement("span");
    btn.appendChild(valueEl);
    btn.insertAdjacentHTML("beforeend", CHEVRON);

    var list = document.createElement("ul");
    list.className = "menu-list";
    list.id = id + "List";
    list.setAttribute("role", "listbox");
    list.tabIndex = -1;
    if (labelId) list.setAttribute("aria-labelledby", labelId);

    var items = [];
    Array.prototype.forEach.call(select.options, function (opt, i) {
      var li = document.createElement("li");
      li.className = "menu-opt";
      li.id = id + "Opt" + i;
      li.setAttribute("role", "option");
      li.setAttribute("data-value", opt.value);
      var text = document.createElement("span");
      text.textContent = opt.textContent;
      li.appendChild(text);
      li.insertAdjacentHTML("beforeend", CHECK);
      list.appendChild(li);
      items.push(li);
    });

    select.parentNode.insertBefore(wrap, select);
    wrap.appendChild(btn);
    wrap.appendChild(list);
    wrap.appendChild(select);
    select.classList.add("menu-native");
    select.tabIndex = -1;
    select.setAttribute("aria-hidden", "true");

    var active = 0;

    function paint() {
      var sel = select.selectedIndex < 0 ? 0 : select.selectedIndex;
      valueEl.textContent = select.options[sel].textContent;
      items.forEach(function (li, i) {
        li.setAttribute("aria-selected", i === sel ? "true" : "false");
      });
    }
    function setActive(i) {
      active = Math.max(0, Math.min(items.length - 1, i));
      items.forEach(function (li, j) {
        li.classList.toggle("active", j === active);
      });
      list.setAttribute("aria-activedescendant", items[active].id);
      // Keep the highlighted option inside the list's own scroll area (never scrolls the page).
      var el = items[active];
      if (el.offsetTop < list.scrollTop) list.scrollTop = el.offsetTop;
      else if (el.offsetTop + el.offsetHeight > list.scrollTop + list.clientHeight) {
        list.scrollTop = el.offsetTop + el.offsetHeight - list.clientHeight;
      }
    }
    // Place the list where it fits, in this order of preference:
    //   1. below the button;
    //   2. still below, after scrolling the page a little to make room;
    //   3. above the button, when the page cannot scroll any further;
    // and never wider than the screen.
    function place() {
      list.classList.remove("up", "end");
      list.style.maxHeight = "";
      var gap = 14;
      var margin = 12;
      var r = btn.getBoundingClientRect();
      var below = window.innerHeight - r.bottom - gap - margin;
      // A sticky header covers the top of the screen, so room "above" starts under it.
      var header = document.querySelector(".site-header");
      var topEdge = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
      var above = r.top - gap - margin - topEdge;
      var need = list.scrollHeight + 2;
      // Inside the pinned opening frame the page must not scroll (that would start the zoom).
      var mayScroll = !select.hasAttribute("data-no-scroll");
      if (need <= below) {
        list.style.maxHeight = need + "px";
      } else {
        var missing = need - below;
        var room = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
        if (mayScroll && room >= missing) {
          list.style.maxHeight = need + "px";
          window.scrollBy({ top: missing + 4 });
        } else if (above > below) {
          list.classList.add("up");
          list.style.maxHeight = Math.min(need, above) + "px";
        } else {
          list.style.maxHeight = Math.max(below, 160) + "px";
        }
      }
      if (list.getBoundingClientRect().right > window.innerWidth - margin) {
        list.classList.add("end");
      }
    }
    function open() {
      if (openMenu && openMenu !== api) openMenu.close();
      list.classList.add("open");
      place();
      btn.setAttribute("aria-expanded", "true");
      setActive(select.selectedIndex < 0 ? 0 : select.selectedIndex);
      list.focus({ preventScroll: true });
      openMenu = api;
    }
    function close(returnFocus) {
      list.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      if (openMenu === api) openMenu = null;
      if (returnFocus) btn.focus({ preventScroll: true });
    }
    function choose(i) {
      select.selectedIndex = i;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      paint();
      close(true);
    }
    var api = { close: close, wrap: wrap };

    btn.addEventListener("click", function () {
      if (list.classList.contains("open")) close(true);
      else open();
    });
    btn.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        open();
      }
    });
    list.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
      else if (e.key === "Home") { e.preventDefault(); setActive(0); }
      else if (e.key === "End") { e.preventDefault(); setActive(items.length - 1); }
      else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(active); }
      else if (e.key === "Escape") { e.preventDefault(); close(true); }
      else if (e.key === "Tab") { close(false); }
    });
    items.forEach(function (li, i) {
      li.addEventListener("mousemove", function () { if (active !== i) setActive(i); });
      li.addEventListener("click", function () { choose(i); });
    });

    // Clicking the small caption above the menu opens it too, like a label would.
    var caption = labelId && document.getElementById(labelId);
    if (caption) {
      caption.addEventListener("click", function () { btn.click(); });
    }
    // If other code changes the select's value, keep the menu in step.
    select.addEventListener("change", paint);
    paint();
  }

  document.addEventListener("pointerdown", function (e) {
    if (openMenu && !openMenu.wrap.contains(e.target)) openMenu.close(false);
  });
  // A resized window moves the button, so close rather than leave the list misplaced.
  // (Only a width change counts: phones fire "resize" when the address bar hides.)
  var lastWidth = window.innerWidth;
  window.addEventListener("resize", function () {
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    if (openMenu) openMenu.close(false);
  });

  var built = 0;
  // Turns every select[data-menu] inside root into a styled menu. Safe to call again for
  // selects added later (the glyph portal adds some after the page loads).
  function initSelectMenus(root) {
    Array.prototype.forEach.call((root || document).querySelectorAll("select[data-menu]"), function (select) {
      if (select.classList.contains("menu-native")) return;
      enhance(select, ++built);
    });
  }
  window.initSelectMenus = initSelectMenus;
  initSelectMenus(document);
})();
