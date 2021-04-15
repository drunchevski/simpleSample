function createVector(i, j) {
  return { x: i, y: j };
}

function addVector(vec1, vec2) {
  return createVector(vec1.x + vec2.x, vec1.y + vec2.y);
}

function subtractVector(vec1, vec2) {
  return createVector(vec1.x - vec2.x, vec1.y + vec2.y);
}

function getLenVector(vec) {
  return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
}

function scaleVector(vec, val) {
  return createVector(vec.x * val, vec.y * val);
}

function vectorNormalize(vec) {
  return scaleVector(vec, 1 / getLenVector(vec));
}

let V = {
  add: addVector,
  sub: subtractVector,
  len: getLenVector,
  scale: scaleVector,
  norm: vectorNormalize,
  create: createVector,
};

let va = V.createVector(2, 3);
let vb = V.createVector(3, 4);
let vc = V.add(va, vb);
let vd = V.norm(va);
vb = V.norm(vb);
