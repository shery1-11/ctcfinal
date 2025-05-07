let s = function(p) {}
new p5(s);


let cursorImg;

function preload(){
  cursorImg=loadImage("./images/cursor.png")
}
function setup() {
   noCursor()
}

function draw() {
  background(255);
  image(cursorImg, mouseX, mouseY);
}