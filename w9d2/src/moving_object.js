export default class MovingObject() {
  constructor (pos, vel, radius, color) {
    this.x = pos[0];
    this.y = pos[1];
    this.xVel = vel[0];
    this.yVel = vel[1];
    this.radius = radius;
    this.color = color;
  }
}