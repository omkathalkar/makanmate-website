/* site.js: small behaviour shared by the explore, listing, Pune and owner pages. */
(function () {
  "use strict";

  // A friend's invite link (?ref=CODE): keep the code on this device so a booking can carry it later
  try {
    var ref = new URLSearchParams(location.search).get("ref");
    if (ref && /^[A-Za-z0-9-]{4,16}$/.test(ref) && !localStorage.getItem("mm-ref")) localStorage.setItem("mm-ref", ref.toUpperCase());
  } catch (e) {}

  // Menu button (the same one the home page uses)
  var burger = document.getElementById("navToggle");
  var menu = document.getElementById("navLinks");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); burger.focus(); }
    });
  }

  // "Download app": the apps are not published yet, so it says "Coming soon" for a moment
  Array.prototype.forEach.call(document.querySelectorAll("[data-coming-soon]"), function (btn) {
    var label = btn.querySelector(".cs-label");
    if (!label) return;
    var original = label.textContent, timer = 0;
    btn.addEventListener("click", function () {
      clearTimeout(timer);
      btn.style.minWidth = btn.offsetWidth + "px";
      label.textContent = "Coming soon";
      btn.classList.add("soon");
      timer = setTimeout(function () { label.textContent = original; btn.classList.remove("soon"); btn.style.minWidth = ""; }, 2200);
    });
  });
})();
