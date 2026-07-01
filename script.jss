function changeProductImage(thumbnail, imagePath) {
  const mainImage = document.getElementById("mainProductImage");

  if (!mainImage) return;

  mainImage.style.opacity = "0";

  setTimeout(() => {
    mainImage.src = imagePath;
    mainImage.style.opacity = "1";
  }, 180);

  const thumbnails = document.querySelectorAll(".thumbnail-row img");

  thumbnails.forEach((thumb) => {
    thumb.classList.remove("active-thumb");
  });

  thumbnail.classList.add("active-thumb");
}
