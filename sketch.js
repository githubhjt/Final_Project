// One ParticleSystem
let emitter;

// GUI
let repSlider;
let emitSlider;

//{!1} One repeller
let repeller;
let att1, att2, att3, att4;

function setup() {
  createCanvas(400, 600);
  textSize(15);
  noStroke();

  repSlider = createSlider(0, 1000, 500);
  repSlider.position(415, 15);
  let p = createP('Repeller Power');
  p.style('font-size', '15px');
  p.position(560, 0);

  emitSlider = createSlider(0, 10, 5);
  emitSlider.position(415, 40);
  let s = createP('Emitter Amount');
  s.style('font-size', '15px');
  s.position(560, 25);

  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 350);
  att1 = new Attractor1(200, 100);
  att2 = new Attractor2(100, 200);
  att3 = new Attractor3(300, 200);
  att4 = new Attractor4(200, 300);
}

function draw() {
  background(230);
    
  repeller.setPower(repSlider.value());
  repeller.move(0.5);
  
  for (let i=0; i < emitSlider.value(); i++) {
    emitter.addParticle();
  }
  
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyRepeller(repeller);
  emitter.applyAttractor1(att1);
  emitter.applyAttractor2(att2);
  emitter.applyAttractor3(att3);
  emitter.applyAttractor4(att4);
  emitter.run();

  repeller.show();
  att1.show();
  att2.show();
  att3.show();
  att4.show();


}
