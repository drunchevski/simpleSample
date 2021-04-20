function lul(value) {
  function kek(diff) {
    value += diff;
    return value;
  }
  return kek;
}

let kekw = lul(15);

console.log(kekw(2));
console.log(kekw(2));

// console.log(kekw(-1000));
// console.log(kekw(1200));

// kekw = lul(0);
// console.log(kekw(10));
// console.log(kekw(-100));
