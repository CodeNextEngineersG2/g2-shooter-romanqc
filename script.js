// UI Variables
var canvas;
var gameScreen;
var scoreDisplay;

// Game Variables
var gameRunning;
var shipShooting;
var alienShooting;
var score;

// Ship Variables
var shipDiameter;
var shipX;
var shipY;
var shipSpeed;
var shipColor;

// Bullet Variables
var bulletDiameter;
var bulletX;
var bulletY;

// Alien Variables
var alienDiameter;
var alienX;
var alienY;
var alienVelocity;

// Alien Bullet Variables
var alienBulletDiameter;
var alienBulletX;
var alienBulletY;


/*
 * setup()
 * This function is called once. Sets up the canvas, accesses HTML elements with
 * select(), and adds event listeners to those elements. Sets initial values of
 * variables by calling resetGame().
 */
function setup(){
  canvas = createCanvas(500,500);
  gameScreen = select("#game-screen");
  canvas.parent(gameScreen);
  shipColor = "#000000";
  shipDiameter = 80;
  shipX = width/2;
  shipY = height - 40;
  shipSpeed = 6;
  shipShooting = false;
  alienX = 0;
  alienY = 0;
  alienVelocity = 8;
  alienBulletDiameter = 20;
  alienShooting = false;

}

function draw(){
  background("#3A5848");
  noStroke();
///////////////////////////
  theToaster();
  theToast();
  theAlien();
}

function theToaster(){
  if(keyIsDown(LEFT_ARROW)){
    shipX -= shipSpeed;
  }else if(keyIsDown(RIGHT_ARROW)){
    shipX += shipSpeed;
  }
  if(keyIsDown(UP_ARROW)){
    shipY -= shipSpeed;
  }
  fill(60,60,60);
  rect(shipX-25,shipY,50,60);
  //toaster Handle
  fill(100,100,100);
  rect(shipX+25,shipY+10,10,5);
  //
  fill(120,120,120);
  rect(shipX-25,shipY,50,10);
  fill(0);
  rect(shipX-22.5,shipY,45,5);
  fill("#ff0000");
  ellipse(shipX-10,shipY+20,10,10);
  fill("#00ff00");
  ellipse(shipX+10,shipY+20,10,10);

  if(shipX <= 25){
    shipX += 6;
  }
  if(shipX >= width-25){
    shipX -= 6;
  }
  if(shipY <= width-60){
    shipY += 30;
  }
}

function keyPressed(){
  if(keyCode === 32 && !shipShooting){
    bulletX = shipX+25;
    bulletY = shipY;
    shipShooting = true;
  }
}

function theToast(){
  if(bulletY > 0){
    fill("#dF942F");
    rect(bulletX-42.5, bulletY-17, 35, 20,8);
    ellipse(bulletX-37,bulletY-16,17,17);
    ellipse(bulletX-13,bulletY-16,17,17);
  if(bulletY >= 0){
    bulletY -= 9;
  }
  }else {
    shipShooting = false;
  }
}

function theAlien(){
    alienX += alienVelocity;
   if(alienX >= width-55 || alienX < 0){
    alienVelocity *= -1;
  }
  fill("#FCFF00");
  rect(alienX,alienY,55,55,10);
  if(random(4) < 1 && !alienShooting) {
    alienBulletY = alienY;
    alienBulletX = alienX;
    alienShooting = true;
  }
}

function darwAlienBullet() {
  //var hitAlien = checkCollision(alienX, alienY, alienDiameter, bullet )
  if(alienBulletY < height){
    if(bulletY > 0 && !hitAlien)
    fill(0,255,255);
    noStorke();
    ellipse(alienBulletX, alienBulletY, alienBulletDiameter, alienBulletDiameter);
    alienBulletY += 10;
  }else if(hitAlien){
    resetAlien();
    alienVelocity++;
    alienShooting = false;
  }
}

function resetAlien(){
  alienX = 0;
  alienY = 0;
  alienVelocity = abs(alienVelocity);
}



function checkCollision(aX,aY,aD,bX,bY,bD){
  distance = dist(aX, aY, bX, bY);
  if(distance <= ((aD + bD)/ 2)){
    return true;
  }else{
    return false;
  }

}
/*
 * gameOver()
 * This function stops the game from running and shows an alert telling the
 * player what their final score is. Finally it resets the game by calling
 * resetGame()
 */


/*
 * resetGame()
 * This function "resets the game" by initializing ship, alien, and game
 * variables.
 */


/*
 * draw()
 * This function animates the ship, alien, and both kinds of bullets, but only
 * if the game is running.
 */


/*
 * drawShip()
 * This function draws the player's ship. It also controls the ship's
 * x value by checking if the player is holding down the left or right keys.
 */


/*
 * keyPressed()
 * This function runs automatically when the player presses the spacebar
 * (keyCode === 32). If they do, and a bullet is not currently being fired
 * ("shipShooting" variable is false), it positions the bullet relative to the
 * ship. Then it sets the "shipShooting" variable to "true", indicating a ship
 * bullet is currently being fired.
 */


/*
 * drawBullet()
 * This function draws a bullet. It also checks to see if the bullet has hit
 * the alien. If it has, the alien is reset to the top-left of the screen
 * and the player earns a point. The alien aslo becomes faster (i.e., harder
 * to hit) each time it is hit by a bullet.
 */


/*
 * drawAlien()
 * This function draws an alien. It also checks to see if the alien has touched
 * the player's ship. If it has, the function calls gameOver().
 */


/*
 * drawAlienBullet()
 * This function behaves much like drawBullet(), only it fires from the alien
 * and not the player's ship. If the bullet hits the player, it's game over.
 */


/*
 * resetAlien()
 * This function sets the alien to its original position at the top-left of
 * the screen. It also sets its velocity to its absolute value (so, if the
 * velocity was negative when it died, it becomes positive upon reset, making
 * it always start by moving to the right).
 */


/*
 * checkCollision(aX, aY, aD, bX, bY, bD)
 * This function first calculates the distance between two circles based on
 * their X and Y values. Based on the distance value, the function returns
 * "true" if the circles are touching, and false otherwise.
 * Circles are considered touching if
 * (distance <= (circle1Diameter + circle2Diameter) / 2)
 */
