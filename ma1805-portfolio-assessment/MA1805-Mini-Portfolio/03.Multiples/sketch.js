let imgs = [];
let imgIndex = 0;
let brushSize = 80;
let blackout;
let coveredPixels = 0;
let totalPixels;
let showText = false;

// blackout is a variable to store a secondary graphics layer

let urls = [
"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Bundesarchiv_Bild_101I-134-0771A-39%2C_Polen%2C_Ghetto_Warschau%2C_Kind_in_Lumpen.jpg/500px-Bundesarchiv_Bild_101I-134-0771A-39%2C_Polen%2C_Ghetto_Warschau%2C_Kind_in_Lumpen.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Injured_Palestinian_by_an_Israeli_airstrike_of_a_house_in_Deir_el-Balah%2C_Gaza_Strip.jpg/330px-Injured_Palestinian_by_an_Israeli_airstrike_of_a_house_in_Deir_el-Balah%2C_Gaza_Strip.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Unpaved_steet_in_the_Frysztak_Ghetto.jpg/500px-Unpaved_steet_in_the_Frysztak_Ghetto.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SoI-War_23-10-29_IDF_01-11.jpg/960px-SoI-War_23-10-29_IDF_01-11.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Lviv_pogrom_%28June_-_July_1941%29.jpg/360px-Lviv_pogrom_%28June_-_July_1941%29.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Displaced_Palestinians_receive_food_from_charitable_Tekiya_during_Ramadan_in_Deir_el-Balah%2C_Gaza_Strip.jpg/500px-Displaced_Palestinians_receive_food_from_charitable_Tekiya_during_Ramadan_in_Deir_el-Balah%2C_Gaza_Strip.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Men_with_an_unidentified_unit_execute_a_group_of_Soviet_civilians_kneeling_by_the_side_of_a_mass_grave.jpg/500px-Men_with_an_unidentified_unit_execute_a_group_of_Soviet_civilians_kneeling_by_the_side_of_a_mass_grave.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hezbollah_Headquarter_Airstrike_2024.jpg/960px-Hezbollah_Headquarter_Airstrike_2024.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Deportation_of_Jews_from_W%C3%BCrzburg_to_the_Lublin_district%2C_25_April_1942_%28USHMM_46207%29.jpg/500px-Deportation_of_Jews_from_W%C3%BCrzburg_to_the_Lublin_district%2C_25_April_1942_%28USHMM_46207%29.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mother_cries_for_her_4-year-old_daughter%2C_who_lost_her_life_due_to_malnutrition_and_lack_of_treatment_due_to_the_war_on_Gaza%2C_Gaza_Strip.jpg/500px-Mother_cries_for_her_4-year-old_daughter%2C_who_lost_her_life_due_to_malnutrition_and_lack_of_treatment_due_to_the_war_on_Gaza%2C_Gaza_Strip.jpg"
];

function preload() {
  for (let url of urls) {
    imgs.push(loadImage(url));
  }
}

// preload loads assets before the sketch runs to make sure that everythings ready

function setup() {
createCanvas(800,800);
blackout = createGraphics(width, height);
blackout.background(0,0);
blackout.noStroke();
totalPixels = width * height;
frameRate (5);
}

// blackout also means to be able to draw separetly so i can layer visual effects if i wanted
// totalPixels tells how much precentage there is for an image, good for when code needs to know when to show text with black screen
// frame rate controls how fast the images are shown

function draw() {
  if (!showText) {

    // this says that if no text is shown, then show images

    if (imgs.length > 0) {
      image(imgs[imgIndex], 0, 0, width, height);
    }

    image(blackout, 0, 0);

    if (frameCount % 10 === 0) {
      imgIndex = (imgIndex + 1) % imgs.length;
    }

  } else {

// this says if images aren't shown then show text

    background (0);
    fill (255);
    textAlign (CENTER, CENTER);
    textSize (22);
    text(
      "The entire ghetto is ablaze, \n" +
      "during the day the sun  is darkended by the smoke\n" +
      "and during the night the sky is red from fire...\n" +
      "They burn one house ater the other,\n" +
      "and people crawl out of their hiding places.\n\n" +
      "- Edith Jacoby, April 1943, Warsaw ghetto",
    width / 2, height / 2
    );
  }
  }

  function mouseDragged() {
    blackout.fill(0, 150);
    for (let i = 0; i < 5; i++) {
      let x = mouseX + random(-brushSize / 2, brushSize / 2);
      let y = mouseY + random(-brushSize / 2, brushSize / 2);
      blackout.circle(x, y, brushSize, brushSize);
    }
    coveredPixels += brushSize * brushSize * 0.1;
    if (coveredPixels >= totalPixels * 0.95) {
      showText = true;
    }
  }