let stars = [];
let waveOffset = 0;
let smokeParticles = [];
let glowing = false;
let flickerAlpha = 120;

function setup() {
  createCanvas (800, 600);
  noStroke();

  for (let i = 0; i < 60; i++) {
    stars.push({ x: random(width), y: random(height / 2), brightness: random(150, 255) });
  }
}

function draw() {
  drawSky();
  drawStars();
  drawMoon();
  drawWaves();
  drawSand();
  drawTent();
  drawFigures();
  drawSmoke();
}

function drawSky() {
  background(10, 20, 60);
}

function drawStars() {
  for (let s of stars) {
    let flicker = random(-30, 30);
    fill(s.brightness + flicker);
    ellipse(s.x, s.y, 2, 2);
  }
}

function drawMoon() {
  fill(240, 240, 200);
  ellipse(width - 100, 100, 80, 80);
}

function drawWaves() {
  noFill();
  stroke(30, 80, 120);
  strokeWeight(3);
  waveOffset += 0.05;

  beginShape();
  for (let x = 0; x < width; x += 20) {
    let y = height * 0.65 + sin(x * 0.02 + waveOffset) * 10;
    vertex(x,y);
  }
  endShape();
}

function drawSand() {
  noStroke();
  fill(210, 190, 110);
  rect (0, height * 0.7, width, height * 0.3);
}

function drawTent() {
  fill(100, 60, 40);
  stroke(80, 40, 20)
  strokeWeight(2);
  let baseY = height * 0.7;
  let x1 = width / 2 - 200;
  triangle(x1, baseY, x1 + 80, baseY - 120, x1 + 160, baseY);
  line(x1, baseY, x1 + 160, baseY);
  noStroke();
}

function drawFigures() {
  stroke(255);
  strokeWeight(3);
  noFill();

  let manX = width / 2 - 60;
  let womanX = width / 2 + 40;
  let memX = width / 2 + 140;
  let baseY = height * 0.7;

  drawStickFigure(manX, baseY, color(190, 160, 40), false, true);

  drawStickFigure(womanX, baseY, color(210, 80, 30), true, false);

  let flicker = 100 + sin(frameCount * 0.1) * 80;
  push();
  stroke(255, flicker);
  drawStickFigure(memX, baseY, color(100, 60, 30, flicker), true, false, 0.5, true);
  pop();
}

function drawStickFigure(x, baseY, hairColor, isFemale, isSmoker, alpha = 1, isMemory = false) {
  push();
  stroke(255, 255 * alpha);
  strokeWeight(3);
  noFill();

  let headY = baseY - 80;
  let torsoTopY = baseY - 60;

  // torso
  line(x, baseY, x, torsoTopY);
  // arms
  line(x, torsoTopY, x - 20, torsoTopY + 20);
  line(x, torsoTopY, x + 20, torsoTopY + 20);
  // legs
  line(x, baseY, x - 15, baseY + 20);
  line(x, baseY, x + 15, baseY + 20);

  noStroke();
  fill(255, 220, 180, 255 * alpha);
  ellipse(x, headY, 35, 35);

  // face/hair
  fill(190, 160, 40);
  // subtle forehead shading
  arc(x, headY - 5, 35, 25, PI, TWO_PI);

  fill(hairColor);
  if (isFemale) {
    arc(x, headY, 50, 60, PI, TWO_PI);
  } else if (isMemory) {
    // memory variant (faded/offset)
    ellipse(x, headY - 10, 40, 20);
  } else {
    arc(x, headY - 5, 35, 25, PI, TWO_PI);
  }

  if (isSmoker) {
    fill(200);
    rect(x + 15, baseY - 25, 12, 3);
    if (glowing) {
      fill(255, 50, 20);
      ellipse(x + 27, baseY - 23, 6, 6);
    }
  }

  pop();
}

function drawSmoke() {
  for (let s of smokeParticles) {
    noStroke();
    fill(180, 180, 180, s.alpha);
    ellipse(s.x + random(-2, 2), s.y + random(-5, 5), s.size, s.size);
    s.y -= 0.5;
    s.alpha -= 1.5;
  }
  smokeParticles = smokeParticles.filter(s => s.alpha > 0);
}

function mousePressed() {
  glowing = true;
  for (let i = 0; i < 5; i++) {
    smokeParticles.push({
      x: width / 2 - 25,
      y: height * 0.7 - 25,
      size: random(5, 10),
      alpha: 255
    });
  }
}

function mouseReleased() {
  glowing = false;
}