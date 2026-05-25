document.addEventListener("DOMContentLoaded", () => {
  // Powiększanie zdjęć
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

  // Efekt rozmazania wokół kursora
  const cursorLight = document.createElement("div");
  cursorLight.classList.add("cursor-light");
  document.body.appendChild(cursorLight);

  document.addEventListener("mousemove", (e) => {
    cursorLight.style.left = e.clientX + "px";
    cursorLight.style.top = e.clientY + "px";
  });
});
