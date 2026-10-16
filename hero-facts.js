/*
 * hero-facts.js: shows trust points one at a time, in any .hero-facts box.
 *
 * Each .hero-fact card fades and slides in (0.6 s), stays for 3.2 s, fades out
 * (0.6 s), then there is a 1 s pause before the next card, and it repeats.
 * For people who ask for reduced motion, the first card is shown and nothing moves.
 * Paused while the tab is hidden or the box is off screen.
 *
 * It starts every .hero-facts box that is on the page now, and exposes
 * window.initFactCycler(box) for boxes added later (the glyph portal adds one).
 */
(function () {
  "use strict";

  var IN = 600; // ms, fade in (matches the CSS transition)
  var HOLD = 3200; // ms, card stays fully visible
  var OUT = 600; // ms, fade out
  var PAUSE = 1000; // ms, nothing shown between two cards

  function cycle(box) {
    if (!box || box.dataset.cycling) return;
    var facts = Array.prototype.slice.call(box.querySelectorAll(".hero-fact"));
    if (facts.length === 0) return;
    box.dataset.cycling = "true";

    // Typing mode: the heading appears, the line under it types out letter by letter,
    // holds for 2 seconds once complete, then the next card does the same.
    var typing = box.dataset.mode === "type";
    if (typing) {
      facts.forEach(function (card) {
        var line = card.querySelector("div > span");
        if (!line) return;
        var full = line.textContent.replace(/\s+/g, " ").trim();
        line.textContent = "";
        // Screen readers get the whole sentence at once; the typed copy is visual only.
        var sr = document.createElement("span");
        sr.className = "sr-only";
        sr.textContent = full;
        var vis = document.createElement("span");
        vis.setAttribute("aria-hidden", "true");
        var done = document.createElement("span");
        done.className = "tw-done";
        var caret = document.createElement("span");
        caret.className = "tw-caret";
        var rest = document.createElement("span");
        rest.className = "tw-rest";
        rest.textContent = full;
        vis.appendChild(done);
        vis.appendChild(caret);
        vis.appendChild(rest);
        line.appendChild(sr);
        line.appendChild(vis);
        card._tw = { done: done, rest: rest, full: full };
      });
    }
    function setTyped(card, n) {
      var t = card._tw;
      if (!t) return;
      t.done.textContent = t.full.slice(0, n);
      t.rest.textContent = t.full.slice(n);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (typing) setTyped(facts[0], facts[0]._tw ? facts[0]._tw.full.length : 0);
      facts[0].classList.add("show");
      return;
    }

    var current = 0;
    var timer = 0;
    var running = true;

    function later(fn, ms) {
      timer = window.setTimeout(fn, ms);
    }

    function step() {
      if (!running) return;
      var card = facts[current];
      card.classList.remove("leave");
      card.classList.add("show"); // fade and slide in
      later(function () {
        card.classList.remove("show");
        card.classList.add("leave"); // fade out, drifting up
        later(function () {
          card.classList.remove("leave");
          current = (current + 1) % facts.length;
          later(step, PAUSE); // the 1 second pause
        }, OUT);
      }, IN + HOLD);
    }

    if (typing) {
      var TYPE_START = 350; // ms after the card appears, before the first letter
      var TYPE_SPEED = 32; // ms per letter
      var HOLD_DONE = 2000; // ms the finished sentence stays on screen
      var FADE_OUT = 450; // ms, card fades out
      var GAP = 120; // ms before the next card appears
      step = function () {
        if (!running) return;
        var card = facts[current];
        var t = card._tw;
        setTyped(card, 0);
        card.classList.remove("leave");
        card.classList.add("show", "typing"); // heading fades in, caret starts blinking
        var n = 0;
        function tick() {
          if (!running) return;
          n++;
          setTyped(card, n);
          if (n < t.full.length) {
            later(tick, TYPE_SPEED);
          } else {
            later(function () {
              // the sentence has been complete for 1 second: fade this card out, start the next
              card.classList.remove("show");
              card.classList.add("leave");
              later(function () {
                card.classList.remove("leave", "typing");
                setTyped(card, 0);
                current = (current + 1) % facts.length;
                later(step, GAP);
              }, FADE_OUT);
            }, HOLD_DONE);
          }
        }
        later(tick, TYPE_START);
      };
    }

    // Pause while the page is hidden or the box is scrolled away.
    var onScreen = true;
    function refresh() {
      var should = onScreen && !document.hidden;
      if (should && !running) {
        running = true;
        step();
      } else if (!should && running) {
        running = false;
        window.clearTimeout(timer);
        facts.forEach(function (c) {
          c.classList.remove("show", "leave", "typing");
          setTyped(c, 0); // a paused typing card starts over when it resumes
        });
      }
    }
    document.addEventListener("visibilitychange", refresh);
    new IntersectionObserver(function (entries) {
      onScreen = entries[0] ? entries[0].isIntersecting : true;
      refresh();
    }).observe(box);

    later(step, 400);
  }

  window.initFactCycler = cycle;
  Array.prototype.forEach.call(document.querySelectorAll(".hero-facts"), cycle);
})();
