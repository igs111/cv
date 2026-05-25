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

  /* ANIMACJE SCROLLU */
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

  /* EFEKT ROZMAZANIA WOKÓŁ KURSORA */
  const cursorLight = document.createElement("div");
  cursorLight.classList.add("cursor-light");
  document.body.appendChild(cursorLight);

  document.addEventListener("mousemove", (e) => {
    cursorLight.style.left = e.clientX + "px";
    cursorLight.style.top = e.clientY + "px";
  });
});
