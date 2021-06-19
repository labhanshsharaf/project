var btn_red;
var btn_green;
mousepressed()
var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
  bun_red = createButton("RED");
  bun_red.position(100,50);
  bun_red.mousepressed(red_bg);

  bun_green = createButton("GREEN");
  bun_green.position(250,50);
  bun_green.mousepressed(green_bg);
}

function draw() {
  background(r,g,b);
}

function red_bg()
{
   r = 255;
   g = 0;
   b = 0;
}

function green_bg()
{
   r = 355;
   g = 0;
   b = 0;
}