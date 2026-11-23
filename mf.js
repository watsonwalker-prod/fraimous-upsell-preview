(function () {
  var cards = document.querySelectorAll(".mf-card");
  if (!cards.length) return;

  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!fine) return;

  var box = document.createElement("div");
  box.className = "mf-hover";
  box.hidden = true;
  box.setAttribute("aria-hidden", "true");
  document.body.appendChild(box);

  function hide() {
    box.hidden = true;
  }

  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      var img = card.querySelector("img");
      var name = card.getAttribute("data-title") || "";
      var src = img ? img.getAttribute("src") || "" : "";
      box.replaceChildren();
      var pic = document.createElement("img");
      pic.src = src;
      pic.alt = "";
      var t = document.createElement("p");
      t.className = "mf-hover-title";
      t.textContent = name;
      var cta = document.createElement("p");
      cta.className = "mf-hover-cta mono";
      cta.textContent = "View the Work";
      box.append(pic, t, cta);
      box.hidden = false;
      var r = card.getBoundingClientRect();
      var w = box.offsetWidth;
      var h = box.offsetHeight;
      box.style.left = Math.min(window.innerWidth - w - 12, Math.max(12, r.right + 8)) + "px";
      box.style.top = Math.min(window.innerHeight - h - 12, Math.max(12, r.top)) + "px";
    });
    card.addEventListener("mouseleave", hide);
  });
})();
