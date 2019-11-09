let values = [[0.8, 0.80001, 0.2, 0.19999],[0.8, 0.80001, 0.2, 0.19999],[0.8, 0.80001, 0.2, 0.19999],[0.8, 0.80001, 0.2, 0.19999]];
let params = [3.1, 3.5, 3.8, 4];
let gridSize;                 
const f = (x, r) => r*x - r*x*x;
let col = 0;
let row = 0;
function setup() {
  gridSize = Math.round(windowHeight / 16);
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60)
}

function draw() {
  if (col > width / gridSize) { col = 0 }
  fill(0)
  rect(col * gridSize, 0, gridSize, gridSize * 16)
  for (let pIndex = 0; pIndex < 4; pIndex ++) {
    const pIndexRatio = (pIndex + 1) / 4
    for (let vIndex = 0; vIndex < 4; vIndex ++) {
      const x = values[pIndex][vIndex]
      fill(
        255,
        (vIndex / 3) * 255,
        255 - ((pIndex) / 3) * 255,
        x * 255,       
      );
      square(
        col * gridSize,
        (((vIndex * 4) + pIndex) * gridSize), 
        gridSize);

      values[pIndex][vIndex] = f(x, params[pIndex])
    }
  }
  col++;
}