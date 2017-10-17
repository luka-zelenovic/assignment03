function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  noStroke();
  fill('#D9DEE5');
  rect(0,0,250,500);
  noStroke();
  fill('#3C3E40');
  rect(250,0,250,500);
  frameRate(12);
}

function draw() {
  translate(250,height/2);

  rotate(frameCount*3);
  noFill();
  stroke(lerpColor(color('#FFFFFF'), color('#000000'), frameCount/360));
  ellipse(250,250,250,250);

   stroke(lerpColor(color('#000000'), color('#FFFFFF'), frameCount/360));
  
  line(-1,0,-200*(cos(frameCount*3)),0);
    stroke(lerpColor(color('#FFFFFF'), color('#000000'), frameCount/360));
    line(1,0,200*(cos(frameCount*3)),0);



    if (frameCount == 360) {
    noLoop();
  }
}