// GUI
let params = {
  repellerPower : 500,
  repellerPowerMin : 0,
  repellerPowerMax : 1000,
  repellerPowerStep : 2,
  repellerMove : 0.3,
  repellerMoveMin : 0,
  repellerMoveMax : 10,
  repellerMoveStep : 0.1,
  att1Power : 500,
  att1PowerMin : 0,
  att1PowerMax : 1000,
  att1PowerStep : 2,
  att2Power : 500,
  att2PowerMin : 0,
  att2PowerMax : 1000,
  att2PowerStep : 2,
  att3Power : 500,
  att3PowerMin : 0,
  att3PowerMax : 1000,
  att3PowerStep : 2,
  att4Power : 500,
  att4PowerMin : 0,
  att4PowerMax : 1000,
  att4PowerStep : 2,
  emitterAmount : 3,
  emitterAmountMin : 0,
  emitterAmountMax : 10,
  emitterAmountStep : 1,
  particleSize : 1,
  particleSizeMin : 0,
  particleSizeMax : 5,
  particleSizeStep : 0.5,
  particleColor : [0, 0, 200],
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

  gui = createGui('Control Panel');
  // sliderRange(0, 100, 2);
  // gui.addGlobals('tValue');
  
  gui.addObject(params);
  gui.setPosition(410, 10);
}

function draw() {
  background(230);
    
  repeller.setPower(params.repellerPower);
  repeller.move(params.repellerMove);
  att1.setPower(params.att1Power);
  att2.setPower(params.att2Power);
  att3.setPower(params.att3Power);
  att4.setPower(params.att4Power);
  
  for (let i=0; i < params.emitterAmount; i++) {
    emitter.addParticle(params.particleColor);
  }
  
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
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