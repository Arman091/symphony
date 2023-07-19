import { AddSibling } from "./structure.js";
import { addTrendingSong } from "./structure.js";
window.addEventListener("DOMContentLoaded", () => {
  
  AddSibling();
  addImages();
  addTrendingSong();
});

function addImages() {
  const playlistElements = document.querySelectorAll(".playlist");
  const imageUrls = [
    "../images/instrumental.jfif",
    "../images/image1.jpg",
    "../images/image2.webp",
    "../images/image.jpg",
  ];

  playlistElements.forEach((playlist, index) => {
    playlist.style.backgroundImage = `url('${imageUrls[index]}')`;
  });
}
