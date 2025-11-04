// Portrait: Me (Animated)
// by Layla Sheeran

let xLeftEar = 0;
let xRightEar = 0;
let yEyes = 0;
let yMouth = 0;
let xEarring = 0;
let yEarring = 0;
let dxLeftEar = 2.3;
let dxRightEar = -1.8;
let dyEyes = 1.5;
let dyMouth = -2;
let dxEarring = 1.7;
let dyEarring = 1.2;

let titleSize = 28;
let grow = true;
let growCount = 0;

function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(230, 240, 255);

  // Animate shapes
  xLeftEar += dxLeftEar;
  xRightEar += dxRightEar;
  yEyes += dyEyes;
  yMouth += dyMouth;
  xEarring += dxEarring;
  yEarring += dyEarring;

  // Bounce logic for each
  if (xLeftEar > 15 || xLeftEar < -15) dxLeftEar *= -1;
  if (xRightEar > 15 || xRightEar < -15) dxRightEar *= -1;
  if (yEyes > 10 || yEyes < -10) dyEyes *= -1;
  if (yMouth > 10 || yMouth < -10) dyMouth *= -1;
  if (xEarring > 10 || xEarring < -10) dxEarring *= -1;
  if (yEarring > 10 || yEarring < -10) dyEarring *= -1;

  // Animate title size
  if (grow) {
    titleSize += 0.5;
    growCount++;
    if (growCount >= 10) {
      grow = false;
      growCount = 0;
    }
  } else {
    titleSize -= 0.5;
    growCount++;
    if (growCount >= 10) {
      grow = true;
      growCount = 0;
    }
  }

  // Title
  textAlign(CENTER, CENTER);
  textSize(titleSize);
  fill(30, 30, 60);
  text("Portrait: Me", width / 2, 40);

  // Shirt
  noStroke();
  fill(90, 140, 210);
  rectMode(CENTER);
  rect(width / 2, 560, 220, 240, 20);

  // Neck
  fill(255, 220, 185);
  rect(width / 2, 430, 40, 40);

  // Face
  fill(255, 220, 185);
  stroke(50);
  strokeWeight(2);
  ellipse(width / 2, 320, 220, 260);

  // Hair
  noStroke();
  fill(60, 30, 15);
  for (let y = 180; y < 420; y += 40) {
    for (let x = width / 2 - 130; x < width / 2 + 140; x += 35) {
      ellipse(x + random(-5, 5), y + random(-5, 5), 50, 50);
    }
  }

  // Glasses (move slightly up/down with eyes)
  noFill();
  stroke(0);
  strokeWeight(4);
  ellipse(width / 2 - 45, 300 + yEyes, 65, 65);
  ellipse(width / 2 + 45, 300 + yEyes, 65, 65);
  line(width / 2 - 13, 300 + yEyes, width / 2 + 13, 300 + yEyes);

  // Eyes
  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(width / 2 - 45, 300 + yEyes, 40, 25);
  ellipse(width / 2 + 45, 300 + yEyes, 40, 25);

  // Pupils
  stroke(30);
  strokeWeight(8);
  point(width / 2 - 45, 300 + yEyes);
  point(width / 2 + 45, 300 + yEyes);

  // Eyebrows
  strokeWeight(4);
  line(width / 2 - 70, 280 + yEyes, width / 2 - 20, 285 + yEyes);
  line(width / 2 + 20, 285 + yEyes, width / 2 + 70, 280 + yEyes);

  // Nose
  fill(255, 205, 170);
  stroke(50);
  triangle(width / 2 - 10, 370, width / 2 + 10, 370, width / 2, 335);

  // Mouth (moves slightly up/down)
  noFill();
  stroke(120, 30, 60);
  strokeWeight(3);
  line(width / 2 - 25, 395 + yMouth, width / 2 + 25, 395 + yMouth);

  // Ears (move side to side)
  noStroke();
  fill(255, 220, 185);
  rect(width / 2 - 135 + xLeftEar, 320, 30, 50, 10);
  rect(width / 2 + 135 + xRightEar, 320, 30, 50, 10);

  // Earrings (move diagonally)
  fill(255, 215, 0);
  triangle(
    width / 2 - 150 + xEarring, 345 + yEarring,
    width / 2 - 140 + xEarring, 345 + yEarring,
    width / 2 - 145 + xEarring, 335 + yEarring
  );
  triangle(
    width / 2 + 140 + xEarring, 345 + yEarring,
    width / 2 + 150 + xEarring, 345 + yEarring,
    width / 2 + 145 + xEarring, 335 + yEarring
  );

  // Signature
  noStroke();
  textAlign(RIGHT, BOTTOM);
  textSize(18);
  fill(40);
  text("Layla Sheeran", width - 20, height - 20);

  // Frame border
  stroke(40);
  strokeWeight(2);
  noFill();
  rect(10, 10, width - 20, height - 20);
}
