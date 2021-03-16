console.log("Webpack is working");
const MovingObject = require("./moving_object.js");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const canvas2d = canvas.getContext("2d");
  // canvas2d.fillStyle = "red"; 
  // canvas2d.fillRect(10,10,40,30); 
  console.log("DOM fully loaded and parsed");
  const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });
  window.mo = mo;
  window.MovingObject = MovingObject;
  window.canvas2d = canvas2d;
});

// const canvas = document.getElementById('bird-game');
// const game = new FlappyBird(canvas);
// game.restart();
// canvas.addEventListener("mousedown", game.click.bind(game));


