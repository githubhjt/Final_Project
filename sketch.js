// GUI
let params = {
  repellerPower : 0,
  repellerPowerMin : 0,
  repellerPowerMax : 1000,
  repellerPowerStep : 2,
  att1Move : 0.3,
  att1MoveMin : 0,
  att1MoveMax : 10,
  att1MoveStep : 0.1,
  att1PowerSize : 1000,
  att1PowerSizeMin : 0,
  att1PowerSizeMax : 10000,
  att1PowerSizeStep : 2,
  att2PowerSize : 1000,
  att2PowerSizeMin : 0,
  att2PowerSizeMax : 10000,
  att2PowerSizeStep : 2,
  att3PowerSize : 1000,
  att3PowerSizeMin : 0,
  att3PowerSizeMax : 10000,
  att3PowerSizeStep : 2,
  att4PowerSize : 1000,
  att4PowerSizeMin : 0,
  att4PowerSizeMax : 10000,
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

let springparticles = [];
let springs = [];
let spacing = 1;
let k = 0.1;

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < 5; i++) {
    springparticles[i] = new springParticle(width / 2, i * spacing);
    if (i !== 0) {
      let a = springparticles[i];
      let b = springparticles[i - 1];
      let spring = new Spring(k, spacing, a, b);
      springs.push(spring);
    }
  }

  springparticles[0].locked = true;

  emitter = new Emitter(300, 300);
  repeller = new Repeller(width / 2, 350);
  att2 = new Attractor2(200, 300);
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

  for (let s of springs) {
    s.update();
    //s.show();
  }

  noFill();
  stroke(50);
  strokeWeight(15);
  beginShape();
  let head = springparticles[0];
  curveVertex(head.position.x, head.position.y);
  for (let p of springparticles) {
    // p.applyForce(gravity);
    p.update();
    curveVertex(p.position.x, p.position.y);
    // p.show();
  }
  let tail = springparticles[springparticles.length - 1];
  curveVertex(tail.position.x, tail.position.y);
  endShape();

//   fill(120);
//   strokeWeight(0);
//   ellipse(tail.position.x, tail.position.y, 64);

  // if (mouseIsPressed) {
  //   tail.position.set(mouseX, mouseY);
  //   tail.velocity.set(0, 0);
  // }

  att1 = new Attractor1(tail.position.x, tail.position.y);

  // let particleSizeValue = params.particleSize;
  emitter.setParticlePS(params.particleSize);
  repeller.setPower(params.repellerPower);
  att1.move(params.att1Move);
  att1.setPower(params.att1PowerSize);
  att2.setPower(params.att2PowerSize);
  att3.setPower(params.att3PowerSize);
  att4.setPower(params.att4PowerSize);
  
  for (let i=0; i < params.emitterAmount; i++) {
    emitter.addParticle(params.particleColor);
  }
  
  // We’re applying a universal gravity.
  let gravity = createVector(random(-0.2,0.2), random(-0.2, 0.2));
  // let gravity = createVector(0, 0);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.applyAttractor1(att1);
  emitter.applyAttractor2(att2);
  emitter.applyAttractor3(att3);
  emitter.applyAttractor4(att4);
  emitter.run();

  // repeller.show();
  att1.show();
  att2.show();
  att3.show();
  att4.show();
}