// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(x, y, s) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(0, 0.001),random(0, 0.001));
    this.acceleration = createVector(5, 5);
    this.lifespan = 255.0;
    this.c = color(0);
    this.s = 0;
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 0.2;
    this.acceleration.mult(0);
  }

  // Method to display
  show() {
    noStroke();
    fill(this.c, this.lifespan);
    circle(this.position.x, this.position.y, this.s);
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}
