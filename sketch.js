function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  drawNightSky();
  drawMoon();
  drawSea();
  drawSand();
  drawTent(420, 300)
  drawPeople();
}

// Sky and stars
function drawNightSky() {
  background(10, 15, 35);
  noStroke ();
  for (let i = 0; i < 100; i++) {
    fill(255);
    ellipse(random(width), random(height / 2), random(1, 3));
  }
}

// Moon
function drawMoon() {
  fill(250, 250, 200);
  ellipse(100, 80, 60, 60);
}

// Sea
function drawSea() {
  noStroke();
  fill(0, 50, 100);
  rect(0, 200, width, 100);
}

// Sand
function drawSand() {
  fill(194, 178, 128);
  rect(0, 300, width, 100);
}

// Tent
function drawTent(x, y) {
  push ();
  translate (x, y);
  noStroke();

  // Shadow on sand
  fill (150, 130, 100, 120);
  ellipse (80, 55, 180, 30);

  //Tent top + base
fill (80, 130, 90);
triangle (0, -70, 160, 0, 60, 0);
fill (60, 100, 70);
rect (0, 0, 160, 60);
fill (20, 40, 30);
triangle (50, 0, 100, -40, 140, 0); // entrance shadow
pop ();
}

// People
function drawPeople() {
  // Left person (smoking, dark blonde)
  drawPerson (260, 290, true, colour(200, 170, 80));
  // right person (not smoking, red hair)
  drawPerson (330, 290, false, colour (220, 100, 50));
}

function drawPerson(x, y, smoking, hairColour) {
  push();
  translate(x, y);
  
  // Head
  noStroke();
  fill (hairColour);
  ellipse(0, -52, 26, 14); // short hair cap

  //Body
  fill(80, 100, 200);
  rect(-10, -35, 20, 40, 8);

// Legs (sitting)
stroke (0);
strokeWeight (3);
line (-8, 5, -25, 20);
line (8, 5, 25, 20);

// Arms
ine (-10, -25, -25, -10);
line (10, -25, 25, -10);

// Cigarette + smpke (if smoking)
if (smoking) {
  stroke (225);
  strokeWeight (2);
  line (25, -10, 35, -8); // cigarette

  noFill();
  stroke (200, 200, 255, 120);
  for (let i = 0; i < 5; i++) {
    ellipse (40 + i * 3, -18 - i * 6, 5, 5);
  }
}
pop ();
}