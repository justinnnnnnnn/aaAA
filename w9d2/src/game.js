function Game(canvas) {
  const DIM_X = canvas.width;
  const DIM_Y = canvas.height;
  const NUM_ASTEROIDS = 10;
  this.addAsteroids()
}

Game.prototype.addAsteroids = function () {
  for (let ast of NUM_ASTEROIDS) {
    const ast = new Asteroid({
      pos: [Math.random() * DIM_X, Math.random() * DIM_Y],
    });
  }
};
