/*
 * Broken Glass
 * Takumi Segi
 * Feb 12
 * 
 * ATTRIBUTIONS:
 * - "I Tried Making Generative Art(p5js)  1:55 https://www.youtube.com/watch?v=UsIF5r8rAvk%5C
 * - ClaudeAi is used to cleanup the code but initial code was from the youtube video. 
 */

// Store all points of the line
let points = [];

// Current drawing position
let x, y;

// Current direction
let angle;

// Current color
let currentColor;

function setup() {
  createCanvas(600, 600);
  background(220);
  
  // Start in the center
  x = width / 2;
  y = height / 2;
  
  // Random starting direction
  angle = random(TWO_PI);
  
  // Random starting color
  currentColor = color(random(255), random(255), random(255));
  
  // Add first point
  points.push({x: x, y: y, col: currentColor});
}

function draw() {
  // Change color every 30 frames
  if (frameCount % 30 == 0) {
    currentColor = color(random(255), random(255), random(255));
  }
  
  // Move forward a little bit
  x += cos(angle) * 2;
  y += sin(angle) * 2;
  
  // Check if hit edge
  if (x < 0 || x > width || y < 0 || y > height) {
    // Choose new random direction
    angle = random(TWO_PI);
    
    // Keep inside canvas
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }
  
  // Add this point with current color
  points.push({x: x, y: y, col: currentColor});
  
  // Draw the entire continuous line
  background(220);
  noFill();
  strokeWeight(2);
  
  // Draw line segments with their colors
  for (let i = 0; i < points.length - 1; i++) {
    stroke(points[i].col);
    line(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
  }
}