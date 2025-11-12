// Homework 11
// by Layla Sheeran

var playerX = 50;
var playerY = 50;
var playerSpeed = 5;

var obstacles = [];
var extraObstacle = null;
var exitX = 550;
var exitY = 350;
var exitSize = 50;

function setup() {
  createCanvas(600, 400);
  background(150, 100, 200); 
  
  
  obstacles.push({ x: 100, y: 200, size: 40, color: color(255, 100, 100), xSpeed: 2, ySpeed: 1 });
  obstacles.push({ x: 300, y: 100, size: 60, color: color(100, 255, 150), xSpeed: -1, ySpeed: 2 });
  obstacles.push({ x: 400, y: 300, size: 50, color: color(100, 150, 255), xSpeed: 1, ySpeed: -2 });
}

function draw() {
  background(150, 100, 200);
  
  fill(255, 255, 0);
  rect(exitX, exitY, exitSize, exitSize);
  textSize(16);
  fill(0);
  text("EXIT", exitX + 8, exitY + 30);
  

  fill(255);
  ellipse(playerX, playerY, 30, 30);
  
 
  if (keyIsDown(LEFT_ARROW)) playerX -= playerSpeed;
  if (keyIsDown(RIGHT_ARROW)) playerX += playerSpeed;
  if (keyIsDown(UP_ARROW)) playerY -= playerSpeed;
  if (keyIsDown(DOWN_ARROW)) playerY += playerSpeed;
  
 
  for (let obs of obstacles) {
    fill(obs.color);
    ellipse(obs.x, obs.y, obs.size);
    
    obs.x += obs.xSpeed;
    obs.y += obs.ySpeed;
    
    
    if (obs.x > width) obs.x = 0;
    else if (obs.x < 0) obs.x = width;
    
    if (obs.y > height) obs.y = 0;
    else if (obs.y < 0) obs.y = height;
  }
  
  
  if (extraObstacle) {
    fill(200, 50, 255);
    rect(extraObstacle.x, extraObstacle.y, 40, 40);
  }

  if (playerX > exitX && playerX < exitX + exitSize &&
      playerY > exitY && playerY < exitY + exitSize) {
    fill(255);
    textSize(30);
    text("You Win!", width / 2 - 60, height / 2);
  } else if (playerX < 0 || playerY < 0 || playerX > width || playerY > height) {
    fill(255);
    textSize(20);
    text("Stay on the screen!", width / 2 - 80, height / 2);
  }
}

function mousePressed() {
  if (!extraObstacle) {
    extraObstacle = { x: mouseX, y: mouseY };
  }
}

