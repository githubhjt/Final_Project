//{!1} The Emitter manages all the particles.
class Emitter {

  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  addParticle(aColor, sValue) {
    let p = new Particle(aColor, sValue);
    p.c = color(aColor);
    this.particles.push(p);
  }

  getParticleS(index) {
    if (this.particles[index]) {
        return this.particles[index].s; // Particle의 s 값을 반환합니다.
    } else {
        return null;
    }
}

  applyForce(force) {
    //{!3} Applying a force as a p5.Vector
    for (let particle of this.particles) {
      particle.applyForce(force);
    }
  }

  applyRepeller(repeller) {
    //{!4} Calculating a force for each Particle based on a Repeller
    for (let particle of this.particles) {
      let force = repeller.repel(particle);
      particle.applyForce(force);
    }
  }
  
  applyAttractor1(attractor) {
    //{!4} Calculating a force for each Particle based on a Repeller
    for (let particle of this.particles) {
      let force = attractor.pull(particle);
      particle.applyForce(force);
    }
  }

  applyAttractor2(attractor) {
    //{!4} Calculating a force for each Particle based on a Repeller
    for (let particle of this.particles) {
      let force = attractor.pull(particle);
      particle.applyForce(force);
    }
  }

  applyAttractor3(attractor) {
    //{!4} Calculating a force for each Particle based on a Repeller
    for (let particle of this.particles) {
      let force = attractor.pull(particle);
      particle.applyForce(force);
    }
  }

  applyAttractor4(attractor) {
    //{!4} Calculating a force for each Particle based on a Repeller
    for (let particle of this.particles) {
      let force = attractor.pull(particle);
      particle.applyForce(force);
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      particle.run();
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}