let points = [];
let gridSize;
function setup() {
  gridSize = Math.round(windowWidth / 20);

  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  for (let x = 0; x <= width; x += gridSize) {
    for (let y = 0; y <= height; y += gridSize) {
      points.push([x, y]);
    }
  }
}

function draw() {
  background(0, 10);
  const g = (mouseX / width) * 255
  const b = (mouseY / height) * 255
  const r = (g + b / 2)

  points.map(([x, y]) => {
    noStroke();
    fill(255 - r, g, b);
    const distance = Math.abs((x - mouseX)) + Math.abs((y - mouseY))
    const squareSize = (distance < gridSize * 10) ?
          distance / 10 :
          gridSize
    rect(x, y, squareSize - 2, squareSize - 2);
    stroke(r, g, b);
  })
}
