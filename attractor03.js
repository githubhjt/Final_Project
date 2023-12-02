class Attractor3 {
  constructor(x, y) {
    this.position = createVector(x, y);
    //{!1} How strong is the repeller?
    this.power = 500;
  }
  
  move(value) {
    this.position.y -= value;
  }

  setPower(value) {
    this.power = value;
  }
  
  // setPower(value) {
  //   this.power = map(value, 0, width, -300, 300);
  // }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(80, 120, 150);
    circle(this.position.x, this.position.y, 15);
  }

  pull(particle) {
    //{!6 .code-wide} This is the same repel algorithm we used in Chapter 2: forces based on gravitational attraction.
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 30, 50);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
