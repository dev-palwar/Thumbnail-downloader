const urlBox = document.querySelector(".url-input input");
previewArea = document.querySelector(".preview");
imgTag = previewArea.querySelector(".thumbnail");
let h3 = document.getElementById("h3");
let icon = document.getElementById("icon");

urlBox.addEventListener("input", () => {
  imgUrl = urlBox.value;
  if (imgUrl.indexOf("https://www.youtube.com/watch?v=") != -1) {
    imgTag.style.display = "block";
    icon.style.display = "none";
    h3.style.display = "none";
    let videoId = imgUrl.split("v=")[1].substring(0, 11);
    let image = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    imgTag.src = image;
  } else if (imgUrl.indexOf("https://youtu.be/") != -1) {
    let videoId = imgUrl.split("be/")[1].substring(0, 11);
    let image = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    imgTag.src = image;
  } else if (imgUrl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) {
    imgTag.src = imgUrl;
  } else {
    imgTag.style.display = "none";
    icon.style.display = "block";
    h3.style.display = "block";
  }
});
