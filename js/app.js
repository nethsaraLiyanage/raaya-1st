(function () {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const invite = document.getElementById("invite");
  const scrollCue = document.getElementById("scrollCue");
  const details = document.getElementById("details");
  const petals = document.getElementById("petals");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* —— Open / close the invitation —— */
  function openInvite() {
    document.body.classList.add("show-invite");
    if (invite) invite.setAttribute("aria-hidden", "false");
    window.scrollTo({ top: 0, behavior: "auto" });
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(refreshReveals);
    });
  }

  function closeInvite() {
    document.body.classList.remove("show-invite");
    if (invite) invite.setAttribute("aria-hidden", "true");
    if (openBtn) openBtn.focus();
  }

  if (openBtn) openBtn.addEventListener("click", openInvite);
  if (closeBtn) closeBtn.addEventListener("click", closeInvite);

  if (scrollCue && details) {
    scrollCue.addEventListener("click", function (e) {
      e.preventDefault();
      details.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* —— Scroll reveals —— */
  let observer = null;

  function setupReveals() {
    const sections = document.querySelectorAll(".reveal-on-scroll");
    if (!sections.length) return;

    if (reduceMotion) {
      sections.forEach((el) => el.classList.add("is-inview"));
      return;
    }

    document.documentElement.classList.add("motion");

    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    sections.forEach((el) => observer.observe(el));
  }

  function refreshReveals() {
    document
      .querySelectorAll(".reveal-on-scroll:not(.is-inview)")
      .forEach(function (el) {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (r.width > 0 && r.top < vh * 0.9 && r.bottom > 40) {
          el.classList.add("is-inview");
          if (observer) observer.unobserve(el);
        }
      });
  }

  setupReveals();

  /* —— Falling petals —— */
  function setupPetals() {
    if (!petals || reduceMotion) return;

    const amount = window.matchMedia("(max-width: 680px)").matches ? 16 : 24;
    const glyphs = ["❀", "✿", "♥", "•"]; // ❀ ✿ ♥ •
    const colors = [
      "var(--blush)",
      "var(--peach-200)",
      "var(--mint-200)",
      "var(--peach)",
    ];

    for (let i = 0; i < amount; i += 1) {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.textContent = glyphs[i % glyphs.length];
      petal.style.setProperty("--x", (Math.random() * 100).toFixed(2) + "%");
      petal.style.setProperty("--c", colors[i % colors.length]);
      petal.style.setProperty(
        "--size",
        (0.6 + Math.random() * 0.85).toFixed(2) + "rem"
      );
      petal.style.setProperty("--dur", (9 + Math.random() * 9).toFixed(2) + "s");
      petal.style.setProperty("--delay", (-Math.random() * 14).toFixed(2) + "s");
      petal.style.setProperty(
        "--drift",
        (-30 + Math.random() * 60).toFixed(2) + "px"
      );
      petal.style.setProperty(
        "--alpha",
        (0.4 + Math.random() * 0.45).toFixed(2)
      );
      petals.appendChild(petal);
    }
  }

  setupPetals();
})();
