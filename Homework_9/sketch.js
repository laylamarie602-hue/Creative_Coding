// Portrait: Me 
// by Layla Sheeran

function setup() {
  createCanvas(600, 800);
  noLoop();
}

function draw() {
  background(230, 240, 255); 
  // Title
  textAlign(CENTER, CENTER);
  textSize(28);
  fill(30, 30, 60);
  text("Portrait: Me", width / 2, 40);

 
  noStroke();
  fill(90, 140, 210);
  rectMode(CENTER);
  rect(width / 2, 560, 220, 240, 20);


  fill(255, 220, 185);
  rect(width / 2, 430, 40, 40);


  fill(255, 220, 185);
  stroke(50);
  strokeWeight(2);
  ellipse(width / 2, 320, 220, 260);


  noStroke();
  fill(60, 30, 15);
  for (let y = 180; y < 420; y += 40) {
    for (let x = width / 2 - 130; x < width / 2 + 140; x += 35) {
      ellipse(x + random(-5, 5), y + random(-5, 5), 50, 50);
    }
  }

  // Glasses (black, roundish)
  noFill();
  stroke(0);
  strokeWeight(4);
  ellipse(width / 2 - 45, 300, 65, 65);
  ellipse(width / 2 + 45, 300, 65, 65);
  line(width / 2 - 13, 300, width / 2 + 13, 300);

  // Eyes (white ellipses inside glasses)
  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(width / 2 - 45, 300, 40, 25);
  ellipse(width / 2 + 45, 300, 40, 25);

  // Pupils (points)
  stroke(30);
  strokeWeight(8);
  point(width / 2 - 45, 300);
  point(width / 2 + 45, 300);

  // Eyebrows (lines)
  strokeWeight(4);
  line(width / 2 - 70, 280, width / 2 - 20, 285);
  line(width / 2 + 20, 285, width / 2 + 70, 280);

  // Nose (triangle)
  fill(255, 205, 170);
  stroke(50);
  triangle(width / 2 - 10, 370, width / 2 + 10, 370, width / 2, 335);

  // Mouth (line)
  noFill();
  stroke(120, 30, 60);
  strokeWeight(3);
  line(width / 2 - 25, 395, width / 2 + 25, 395);

  // Ears (rectangles)
  noStroke();
  fill(255, 220, 185);
  rect(width / 2 - 135, 320, 30, 50, 10);
  rect(width / 2 + 135, 320, 30, 50, 10);

  // Earrings (triangles)
  fill(255, 215, 0);
  triangle(width / 2 - 150, 345, width / 2 - 140, 345, width / 2 - 145, 335);
  triangle(width / 2 + 140, 345, width / 2 + 150, 345, width / 2 + 145, 335);

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

