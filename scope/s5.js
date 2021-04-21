let e1 = 10;

function eM(e1) {
  e1 += 10;
  return e1;
}

console.log(e1);   		//10
console.log(eM(10));	//20
console.log(eM(10));	//20
console.log(e1);		//10
