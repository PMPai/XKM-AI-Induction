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
