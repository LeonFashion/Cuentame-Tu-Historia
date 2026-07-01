function changeProductImage(imagePath) {
  const mainImage = document.getElementById("mainProductImage");

  if (mainImage) {
    mainImage.style.opacity = "0";

    setTimeout(() => {
      mainImage.src = imagePath;
      mainImage.style.opacity = "1";
    }, 180);
  }
}
