function MovingObject() {
  constructor(pos, vel, radius, color) {
    this.pos = pos
    this.x = pos[0];
    this.y = pos[1];
    this.vel = vel
    this.xVel = vel[0];
    this.yVel = vel[1];
    this.radius = radius;
    this.color = color;
  }
}

MovingObect.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color
  ctx.beginPath()

  ctx.arc(
    this.x,
    this.y,
    this.radius,
    0,
    2 * Math.PI,
    false
  )
  ctx.fill()
}


module.exports = MovingObject