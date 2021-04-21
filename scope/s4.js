let e1 = 10;

function eM() {
  let e1 = 10;
  e1 += 10;
  return e1;
}

console.log(e1);   //10
console.log(eM()); //20
console.log(eM()); //20
console.log(e1);   //10
