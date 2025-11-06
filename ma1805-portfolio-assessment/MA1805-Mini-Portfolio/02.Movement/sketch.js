let words = [
  "AI Influencers", "Deepfakes", "Parasocial", "Doomscrolling",  "Incel", "Looksmaxxing", "Body Dysmorphia", "Labubu", "Bonnie Blue", "Andrew Tate", "Negative Canthal Tilt", "Trad-Wife", "Algorithm", "Stock Market", "Digital Nationalism", "Performatism", "Dubai Chocolate", "Meme Warfare", "ADHD", "Acoustic"
];

let textSpots = [];

function setup () {
  createCanvas(800, 800);
  textAlign(CENTER, CENTER);
  textSize(14);
  textStyle(NORMAL);
  textFont('Helvetica');
  noStroke ();
}

function draw() {
  background (0);

  for (let i = 0; i < 150; i++) {
  fill(random(150, 255), random(20, 80), random(0, 30), random(60, 120));
  rect(random(width), random(height), random(80), random(180));
  }

  // the for loops 150 times to draw rectangles on canvas. creates a moving pattern that changes every frame
  
  for (let i = 0; i < textSpots.length; i++) {
    let spot = textSpots[i];
    fill (255);
    text(spot.word, spot.x, spot.y);
  }
}

// draws the words from array and places text at the stored x y positions.
    
let lastAddTime = 0;

function mouseDragged() {
  if (frameCount - lastAddTime > 10) {

// frameCount cehcks if 10 frames have passed since a word was last added, to prevent too many words being added at once, so it's easier to read

  let spot = {
    word: random(words),
    x: mouseX + random(-50, 50),
    y: mouseY + random(-50, 50)
  };
textSpots.push(spot);

lastAddTime = frameCount;

// soldifies no new word being released after 10 frames, it resets

  }
}

// let spot creates a new object to store all info for a word
// random -50, 50 scatters the words a bit so they're not bunched together when mouse is dragged
// text spots push add the new object to array so when mouse is dragged more words appear on screen