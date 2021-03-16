const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

window.addEventListener("DOMContentLoaded", (event) => {
  const canvas = document.getElementById("game-canvas");
  canvas.getContext("2d");
  console.log("DOM fully loaded and parsed");
});

console.log("Webpack is working");
