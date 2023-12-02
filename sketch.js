// GUI
let params = {
  repellerPower : 10,
  repellerPowerMin : 0,
  repellerPowerMax : 500,
  repellerPowerStep : 2,
  repellerMove : 0.3,
  repellerMoveMin : 0,
  repellerMoveMax : 10,
  repellerMoveStep : 0.1,
  emitterAmount : 3,
  emitterAmountMin : 0,
  emitterAmountMax : 10,
  emitterAmountStep : 1,
  tColor : [200, 0, 0],
  tChoice : ['apple', 'banana', 'mango']
}

// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;
let att1, att2, att3, att4;

function setup() {
  createCanvas(400, 600);

  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 350);
  att1 = new Attractor1(200, 100);
  att2 = new Attractor2(100, 200);
  att3 = new Attractor3(300, 200);
  att4 = new Attractor4(200, 300);

  gui = createGui('test slider');
  // sliderRange(0, 100, 2);
  // gui.addGlobals('tValue');
  
  gui.addObject(params);
  gui.setPosition(410, 10);
}

function draw() {
  background(230);
    
  repeller.setPower(params.repellerPower);
  repeller.move(params.repellerMove);
  
  for (let i=0; i < params.emitterAmount; i++) {
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