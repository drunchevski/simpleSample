function lul() {
  let d = 10;

  function kek() {
    d += 10;
    return d;
  }

  return kek;
}

let kekw = lul();

console.log(kekw());
console.log(kekw());
console.log(kekw());
console.log(kekw());
