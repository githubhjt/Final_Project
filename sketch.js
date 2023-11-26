// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;
let att1;
let att2

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, 350);
  att1 = new Attractor1(150, 150);
  att2 = new Attractor2(90, 230);
}

function draw() {
  background(230);
    
  // repeller.setPower(mouseX);
  // repeller.move(0.5);
  
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  // emitter.applyRepeller(repeller);
  emitter.applyAttractor1(att1);
  emitter.applyAttractor2(att2);
  emitter.run();

  // repeller.show();
  att1.show();
  att2.show();
}
