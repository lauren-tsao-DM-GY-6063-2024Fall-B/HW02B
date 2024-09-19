function preload(){
  img01 = loadImage("images/SeymourZayon_GeometricStairs.jpg")
}
function setup() {
  createCanvas(500, 676);
  background(225, 225, 225);
  angleMode(DEGREES)
  rectMode(CENTER)

  

  //image(img01, 0, 0, 500, 676);

  let trans = 255;
  let xcent = 250;
  let ycent = 338;
  
  //white square
  push();
  strokeWeight(0)
  fill(10, 50, 100, trans);
  rect(xcent, ycent, 500, 800)
  pop()

  //left rectangle
  push();
  strokeWeight(0)
  blendMode(OVERLAY)
  fill(0, 255, 0, trans);
  rect(0, 0, 50, 1352)
  pop()

  //right rectangle
  push();
  strokeWeight(0)
  blendMode(OVERLAY)
  fill(0, 255, 0, trans);
  rect(500, 676, 59, 1352)
  pop()

  //blue rectangle
  push();
  strokeWeight(0)
  fill(0, 0, 225, trans);
  rect(xcent, ycent, 300, 141)
  pop()

  //quad
  push();
  strokeWeight(0)
  blendMode(DIFFERENCE)
  fill(0, 50, 225, trans);
  quad(0, ycent, xcent, 200, 500, ycent, xcent, 480);
  pop()

  //brown square
  push();
  strokeWeight(0)
  translate(250, 338)
  rotate(45)
  fill(250, 150, 0, trans);
  rect(0, 0, 125, 125)
  pop()

  //semi-circle TOP
  push();
  strokeWeight(0)
  blendMode(DIFFERENCE)
  fill(150, 115, 225, trans);
  arc(250, 0, 500, 500, 0, 180);
  pop()

  //semi-circle BOTTOM
  push();
  strokeWeight(0)
  blendMode(DIFFERENCE)
  fill(150, 115, 225, trans);
  arc(250, 676, 500, 500, 0, 360);
  pop()

  //yellow rectangle
  push();
  strokeWeight(0)
  blendMode(SOFT_LIGHT)
  fill(247, 0, 0, trans);
  rect(xcent, ycent, 72, 100)
  pop()

  //yellow circle
  push();
  blendMode(SOFT_LIGHT)
  strokeWeight(0)
  fill(300, 300, 10, trans);
  circle(width/2, height/2, 500)
  pop()

 //blue triangle
 push();
 strokeWeight(0)
 blendMode(OVERLAY)
 fill(100, 0, 225, trans);
 triangle(0, 0, 250, 338, 0, 676);
 pop()

 //blue triangle 02
 push();
 strokeWeight(0)
 blendMode(OVERLAY)
 fill(100, 0, 225, trans);
 triangle(500, 0, 250, 338, 500, 676);
 pop()

}

function draw() {
  
  
}
