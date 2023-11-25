class Attractor {
  constructor(x, y) {
    this.position = createVector(width/2, height/2);
    //{!1} How strong is the repeller?
    this.power = 1000;
  }
  
  move(value) {
    this.position.y -= value;
  }
  
  setPower(value) {
    this.power = map(value, 0, width, -300, 300);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(80, 120, 150);
    circle(width/2, height/2, 25);
  }

  pull(particle) {
    //{!6 .code-wide} This is the same repel algorithm we used in Chapter 2: forces based on gravitational attraction.
    let force = p5.Vector.sub(this.position, this.position);
    let distance = force.mag();
    distance = constrain(distance, 10, 15);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
