document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlayImg");
  const closeBtn = document.getElementById("closeBtn");
  const zoomableImages = document.querySelectorAll(".zoomable");

  zoomableImages.forEach(img => {
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

  console.log("Portfolio Igora Godziewskiego załadowane z animacjami.");
});
