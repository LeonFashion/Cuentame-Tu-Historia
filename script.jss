function changeProductImage(thumbnail, imagePath) {
  const mainImage = document.getElementById("mainProductImage");

  if (!mainImage) {
    console.log("Main product image not found.");
    return;
  }

  mainImage.style.opacity = "0";

  setTimeout(function () {
    mainImage.src = imagePath;
    mainImage.style.opacity = "1";
  }, 180);

  const thumbnails = document.querySelectorAll(".thumbnail-row img");

  thumbnails.forEach(function (thumb) {
    thumb.classList.remove("active-thumb");
  });

  thumbnail.classList.add("active-thumb");
}
