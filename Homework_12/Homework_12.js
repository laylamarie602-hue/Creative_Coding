// Homework 12
// by Layla Sheeran

var player = { x: 50, y: 50, size: 30, speed: 5 };

var obstacles = [];
var extraObstacles = [];   // now an array instead of single object

var exitBox = { x: 550, y: 350, size: 50 };

function setup() {
  createCanvas(600, 400);
  createObstacles();
}-

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

function drawExtraObstacles() {
  fill(200, 50, 255);
  for (let obs of extraObstacles) {
    rect(obs.x, obs.y, 40, 40);
  }
}


function createObstacles() {
  obstacles.push({ x: 100, y: 200, size: 40, color: color(255, 100, 100), xSpeed: 2, ySpeed: 1 });
  obstacles.push({ x: 300, y: 100, size: 60, color: color(100, 255, 150), xSpeed: -1, ySpeed: 2 });
  obstacles.push({ x: 400, y: 300, size: 50, color: color(100, 150, 255), xSpeed: 1, ySpeed: -2 });
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


function drawBorders() {
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(0, 0, width, height);
  noStroke();
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

function mousePressed() {
  extraObstacles.push({ x: mouseX, y: mouseY });
}
