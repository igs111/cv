document.addEventListener("DOMContentLoaded", () => {

  /* POWIĘKSZANIE ZDJĘĆ */
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlayImg");
  const closeBtn = document.getElementById("closeBtn");

  document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
      overlay.style.display = "flex";
      overlayImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.style.display = "none";
  });

  /* ANIMACJE SCROLLOWE */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("active");
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* PODŚWIETLANIE KURSORA */
  document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--cursorX", e.clientX + "px");
    document.body.style.setProperty("--cursorY", e.clientY + "px");
    document.body.style.setProperty("--cursorX", e.clientX + "px");
  });
});
