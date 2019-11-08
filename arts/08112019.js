let points = [];
let gridSize;

const getOffset = (itemPos, mousePos) =>
  Math.abs(itemPos - mousePos) / width;

function setup() {
  gridSize = Math.round(windowWidth / 40);

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
  
  background(0, 0);

  points.map(([x, y], i) => {
    const offsetX = getOffset(x, mouseX)
    const offsetY = getOffset(y, mouseY)

    // Layer 1
    fill(255 * offsetX, 0, 255 * offsetY, 100);
    stroke(255, 0, 0);
    (i % 3) &&
      rect(
        x - offsetX * 10,
        y - offsetY * 10,
        gridSize * 2,
        gridSize * 2
      );

    // Layer 2
    noFill()
    stroke(0, 255 * offsetX, 255 * offsetY, 100);
    rect(x, y, gridSize - offsetX * 10, gridSize + offsetY * 5);
    
    // Layer 3
    stroke(0, 255 * offsetX, 255 - 255 * offsetY, 255);
    (i % 2) &&
      rect(
        x + offsetX * 5,
        y - offsetX * 5,
        gridSize * 1.5 + offsetX * 10,
        gridSize * 1.5 - offsetY * 5
     );
  })
}
