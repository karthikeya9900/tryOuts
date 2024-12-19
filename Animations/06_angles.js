function createScreen(width, height) {
  const screen = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(' ');
    }
    screen.push(row);
  }
  return screen;
}

function putPixel(screen, char, x, y) {
  if (x < 0 || x >= screen[0].length || y < 0 || y >= screen.length) {
    return;
  }

  screen[Math.floor(y)][Math.floor(x)] = char;
}

function putString(screen, str, x, y) {
  for (let i = 0; i < str.length; i++) {
    putPixel(screen, str[i], x + i, y);
  }
}

function screenToString(screen) {
  let frame = '';
  for (let i = 0; i < screen.length; i++) {
    frame += screen[i].join('');
  }

  return frame;
}

function clearScreen(screen) {
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = ' ';
    }
  }
}

function putParticle(screen, particle) {
  const position = particle[0];
  const symbol = particle[1];
  const radius = particle[2];
  const angle = particle[3];

  const x = position[0] + radius * Math.cos(angle);
  const y = position[1] + radius * Math.sin(angle);

  putString(screen, 'C', position[0], position[1]);
  putString(screen, symbol, x, y);
}

function displayAnimFormat(width, height, frames) {
  console.log(width, height);
  console.log(frames);
}

function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
}

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function putWalker(screen, curve) {
  const position = curve[0];
  const char = curve[1];
  const x = position[0];
  const y = position[1];
  const size = curve[2];
  putString(screen, char, x, y);
}

function putCurves(screen, curves) {
  for (const curve of curves) {
    putWalker(screen, curve);
  }
}

function animate(screen, curves, steps) {
  let frames = '';
  for (let i = 0; i < steps; i++) {
    clearScreen(screen);
    putCurves(screen, curves);
    // moveWalkers(curves);
    frames += screenToString(screen);
  }

  return frames;
}

function main() {  
  const WIDTH = 45;
  const HEIGHT = 45;
  const screen = createScreen(WIDTH, HEIGHT);
  const curve1 = [[45, 45], '*', 20, degreesToRadians(91)];
  // const curve2 = [[0, 0], '@', 20, degreesToRadians(91)];
  const curves = [curve1];
  const frames = animate(screen, curves, 50);
  displayAnimFormat(WIDTH, HEIGHT, frames);
}

main();