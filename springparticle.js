class springParticle {
    constructor(x, y) {
      this.locked = false;
      this.acceleration = createVector(0, 0);
      this.velocity = createVector(0, 0);
      this.position = createVector(x, y);
      this.mass = 100; // Let's do something better here!
    }
  
    applyForce(force) {
      let f = force.copy();
      f.div(this.mass);
      this.acceleration.add(f);
    }
  
    // Method to update position
    update() {
      if (!this.locked) {
        this.velocity.mult(0.99);
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
      }
    }
  
    // Method to display
    show() {
      stroke(30);
      strokeWeight(4);
      fill(45, 197, 244);
      ellipse(this.position.x, this.position.y, 16);
    }
  }
  