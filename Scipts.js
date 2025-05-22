const contenedor = document.getElementById("contenedor-video");

const video = document.createElement("video");
video.src = "1.mp4"; // Cambia esto por la ruta de tu video
video.width = 500;
video.controls = true;

video.style.display = "block";
video.style.margin = "0 auto";


contenedor.appendChild(video);