/* global createCanvas, background, ellipse, rect,  noStroke ， fill */

function setup() {
  // Code here runs only once
  createCanvas(800, 600);
}

function draw() {
  // Code here runs continuously
  background(220);
  noStroke();

  //red
  fill(246, 83, 20);
  rect(50,50,50,50);
  
  //green
  fill(124, 187, 0);
  rect(105,50,50,50);

  //blue
  fill(0, 161, 241);
  rect(50,105,50,50);

  //yellow
  fill(255, 204, 0);
  rect(105,105,50,50);

  

  

}
