// Homework 13
// by Layla Sheeran

var player = { x: 50, y: 50, size: 30, speed: 5 };

var obstacles = [];
var extraObstacles = [];  

var exitBox = { x: 550, y: 350, size: 50 };

function setup() {
  createCanvas(600, 400);
  createObstacles();
}

function draw() {
  background(150, 100, 200);

  drawBorders();
  drawExit();
  drawPlayer();
  movePlayer();
  drawObstacles();
  moveObstacles();
  drawExtraObstacles();
  displayWinMessage();
}


function drawPlayer() {
  fill(255);
  ellipse(player.x, player.y, player.size);
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW))  player.x -= player.speed;
  if (keyIsDown(RIGHT_ARROW)) player.x += player.speed;
  if (keyIsDown(UP_ARROW))    player.y -= player.speed;
  if (keyIsDown(DOWN_ARROW))  player.y += player.speed;
}


function createObstacles() {
  for (let i = 0; i < 5; i++) {
    obstacles.push({
      x: random(50, 550),
      y: random(50, 350),
      size: random(30, 60),
      color: color(random(255), random(255), random(255)),
      xSpeed: random(-3, 3),
      ySpeed: random(-3, 3)
    });
  }
}

function drawObstacles() {
  for (let obs of obstacles) {
    fill(obs.color);
    ellipse(obs.x, obs.y, obs.size);
  }
}

function moveObstacles() {
  for (let obs of obstacles) {
    obs.x += obs.xSpeed;
    obs.y += obs.ySpeed;

    if (obs.x > width)  obs.x = 0;
    if (obs.x < 0)      obs.x = width;
    if (obs.y > height) obs.y = 0;
    if (obs.y < 0)      obs.y = height;
  }
}

function drawExtraObstacles() {
  fill(200, 50, 255);
  for (let obs of extraObstacles) {
    rect(obs.x, obs.y, 40, 40);
  }
}

function mousePressed() {
  extraObstacles.push({
    x: mouseX,
    y: mouseY
  });
}

function drawExit() {
  fill(255, 255, 0);
  rect(exitBox.x, exitBox.y, exitBox.size, exitBox.size);

  fill(0);
  textSize(16);
  text("EXIT", exitBox.x + 10, exitBox.y + 30);
}

function displayWinMessage() {
  if (
    player.x > exitBox.x &&
    player.x < exitBox.x + exitBox.size &&
    player.y > exitBox.y &&
    player.y < exitBox.y + exitBox.size
  ) {
    fill(255);
    textSize(32);
    text("YOU WIN!", width / 2 - 80, height / 2);
  }
}


function drawBorders() {
  stroke(0);
  strokeWeight(6);
  noFill();
  rect(0, 0, width, height);
  noStroke();
}
