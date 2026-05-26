const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document
  .querySelectorAll(".tile, .quote-panel, .table-wrap, .stage, .timeline-item, .step, .flow-item")
  .forEach((panel) => {
    panel.addEventListener("pointerenter", () => panel.classList.add("is-floating"));
    panel.addEventListener("pointerleave", () => panel.classList.remove("is-floating"));
    panel.addEventListener("focusin", () => panel.classList.add("is-floating"));
    panel.addEventListener("focusout", () => panel.classList.remove("is-floating"));
  });

const revealItems = document.querySelectorAll(
  ".metric, .tile, .quote-panel, .table-wrap, .hub, .step, .flow-item, .stage, .timeline-item",
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.16 },
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal-ready");
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
