document.addEventListener("DOMContentLoaded", () => {
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

  // efekt rozmazania wokół kursora
  document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--cursorX", e.clientX + "px");
    document.body.style.setProperty("--cursorY", e.clientY + "px");
    document.body.style.setProperty("transform", `translate(${e.clientX}px, ${e.clientY}px)`);
    document.body::before;
  });
});
