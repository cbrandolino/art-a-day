let gridSize = 35;
let points = [];

function setup() {
  createCanvas(720, 360);
  background(0);
  noStroke();
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      points.push([x, y]);
    }
  }
}

function draw() {
  background(0, 5);
  const g = (mouseX / width) * 255
  const b = (mouseY / height) * 255
  const r = mouseIsPressed ? 255 : (g + b / 2)
  const a = mouseIsPressed ? 255 : 60

  points.map(([x, y]) => {
    noStroke();
    fill(255 - r, g, b);
    rect(x - 1, y - 1, 3, 3);
    stroke(r, g, b, a);
    line(x, y, mouseX, mouseY);
  })
  
}