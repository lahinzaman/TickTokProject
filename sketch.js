var hr,sc,mn;

function setup() {

  hr = hour();
  mn = minute();
  sc = second();
  noStroke();
  scAngle = map(sc, 0, 60, 0, 360);
  push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop()

  angleMode(DEGREES);
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {

let mn = map(mouseX, 0, width, 0, 175);

let sc = map(mouseX, 0, width, 40, 300);
fill(255, c, 0);
ellipse(width/2, height/2, d, d);

  background(255,255,255);  
  drawSprites();
}