var triList = [ 1,2,3];
var colorList = ['#e85669', 
'#0d678c',
'#a6cf1d', 
'#ffa90f', 
'#62d5a6', 
'#be56ae', 
'#f0a234', 
'#f1b6ee', 
'#df4feb', 
'#894206', 
'#af3dab', 
'#555bf6', 
'#2b3027', 
'#4dd10f', 
'#4a55b7', 
'#863a1b', 
'#735561', 
'#12cf18', 
'#194f06', 
'#62db8e', 
'#41dd36'];
function setup() {
 
  frameRate(4);
}

function draw() {
  createCanvas(400, 400);
   background(noise(frameCount)*256);
  noStroke();
  for(var x = 0; x < 400; x+=25)
  {
    for(var y = 0; y < 400; y+=25)
    {
    var index = floor(random() * triList.length);
    var t = triList[index];
    fill(color(random(colorList)));
    if (t==1) {
    triangle(x, y, (x+25), (y), (x+12.5), (y+25));
    }
    else if (t==2) {
    triangle(x, y, (x), (y+20), (x+20), (y+20));
    }
    else if (t==3) {
    triangle(x, y, (x), (y-40), (x+20), (y+20));
    }
    }
  }

}