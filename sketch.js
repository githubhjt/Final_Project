// GUI
let params = {
  repellerPower : 0,
  repellerPowerMin : 0,
  repellerPowerMax : 1000,
  repellerPowerStep : 2,
  repellerMove : 0.3,
  repellerMoveMin : 0,
  repellerMoveMax : 10,
  repellerMoveStep : 0.1,
  att1PowerSize : 0,
  att1PowerSizeMin : 0,
  att1PowerSizeMax : 10000,
  att1PowerSizeStep : 2,
  att2PowerSize : 10000,
  att2PowerSizeMin : 0,
  att2PowerSizeMax : 100000,
  att2PowerSizeStep : 2,
  att3PowerSize : 0,
  att3PowerSizeMin : 0,
  att3PowerSizeMax : 1000,
  att3PowerSizeStep : 2,
  att4PowerSize : 0,
  att4PowerSizeMin : 0,
  att4PowerSizeMax : 1000,
  att4PowerSizeStep : 2,
  emitterAmount : 6,
  emitterAmountMin : 0,
  emitterAmountMax : 10,
  emitterAmountStep : 1,
  particleSize : 1.5,
  particleSizeMin : 0,
  particleSizeMax : 100,
  particleSizeStep : 0.5,
  particleColor : [50 , 50, 50],
  tChoice : ['apple', 'banana', 'mango']
}

// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;
let att1, att2, att3, att4;

function setup() {
  createCanvas(600, 600);

  emitter = new Emitter(250, 200);
  repeller = new Repeller(width / 2, 350);
  att1 = new Attractor1(300, 200);
  att2 = new Attractor2(250, 200);
  att3 = new Attractor3(400, 300);
  att4 = new Attractor4(300, 400);

  gui = createGui('Control Panel');
  // sliderRange(0, 100, 2);
  // gui.addGlobals('tValue');
  
  gui.addObject(params);
  gui.setPosition(10, 10);
}

function draw() {
  background(230);

  // let particleSizeValue = params.particleSize;
  emitter.setParticlePS(params.particleSize);
  repeller.setPower(params.repellerPower);
  repeller.move(params.repellerMove);
  att1.setPower(params.att1PowerSize);
  att2.setPower(params.att2PowerSize);
  att3.setPower(params.att3PowerSize);
  att4.setPower(params.att4PowerSize);
  
  for (let i=0; i < params.emitterAmount; i++) {
    emitter.addParticle(params.particleColor);
  }
  
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  // let gravity = createVector(0, 0);
  emitter.applyForce(gravity);
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