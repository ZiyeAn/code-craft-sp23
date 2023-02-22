let start = 0;
function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  let xoff = start;

  background(240);
  
  for (let i = 0; i < width; i++) {
    let lineHeight = height - map(noise(xoff), 0, 1, 0, height);
    line(i, lineHeight, i, height)
    
    xoff += 0.005;
    
    print(lineHeight);
  }
  
}