function setup() {
  createCanvas(500,500);
}

function draw() {
  var c1 = color(255, 255, 0);
  var c2 = color(255, 0, 0);
  var c3 = color(0, 0, 255);

background(0);
noStroke(); 

fill(c1);
rect(50, 60, 55, 55);

fill (c2);
rect(30,40,55,55);

fill (c3);
rect(10,20,55,55);

}