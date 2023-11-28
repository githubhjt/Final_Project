// One ParticleSystem
let emitter;

// GUI
let repSlider;

//{!1} One repeller
let repeller;
let att1, att2, att3, att4;

function setup() {
  createCanvas(400, 400);
  textSize(15);
  noStroke();

  repSlider = createSlider(0, 1000, 500);
  repSlider.position(415, 15);

  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 350);
  att1 = new Attractor1(200, 100);
  att2 = new Attractor2(100, 200);
  att3 = new Attractor3(300, 200);
  att4 = new Attractor3(200, 300);
}

function draw() {
  background(230);
    
  repeller.setPower(repSlider.value());
  repeller.move(0.5);
  
  emitter.addParticle();
  emitter.addParticle();
  
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyRepeller(repeller);
  emitter.applyAttractor1(att1);
  emitter.applyAttractor2(att2);
  emitter.applyAttractor3(att3);
  emitter.applyAttractor3(att4);
  emitter.run();

  repeller.show();
  att1.show();
  att2.show();
  att3.show();
  att4.show();
}
