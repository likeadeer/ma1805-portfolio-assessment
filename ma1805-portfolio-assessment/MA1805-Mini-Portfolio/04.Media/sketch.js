let catX, catY;
// stores position of cat
let t = 0;
// controls animation
function setup() {
  createCanvas (800, 800);
  noStroke();
  catX = width / 5;
  catY = height / 5;
}

function draw() {
 background(0);

  let wiggle = sin(t * 10) * 5;
  t += 0.05;

  // sin makes a back and forth pattern, multiplying by 5 decides how big movmement is, increasing t makes the animation continous

  fill(255, 180, 200);
  rect(catX - 20, catY - 10 + wiggle, 40, 25);

  // body
 
  rect(catX - 20, catY - 10 + wiggle, 30, 25);

  triangle(catX - 15, catY - 35 + wiggle, catX - 5, catY - 45 + wiggle, catX - 2, catY - 35 + wiggle);
  triangle(catX + 15, catY - 35 + wiggle, catX + 5, catY - 45 + wiggle,  catX + 2, catY - 35 + wiggle);
  
  // ears

  fill(0);
  rect (catX - 8, catY - 30 + wiggle, 4, 4);
  rect(catX + 4, catY - 30 + wiggle, 4, 4);

  // eyes

  fill(255, 180, 200);
  rect(catX - 18, catY + 15 + sin(t * 10) * 4, 6, 10);
  rect(catX + 12, catY + 15 - sin(t * 10) *4, 6, 10);

  // feet

  rect(catX + 20, catY - 5 + sin(t * 8) * 4, 15, 5);

  // tail
}