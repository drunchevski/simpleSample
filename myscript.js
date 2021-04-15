function buttonClicked() {
  alert("buttonClicked");
}

let user_name = "John";
let user_age = 25;

let user = { name: "Tommy", age: 25 };
user.name = "toba";
user.name_23213123 = "toba";

//console.log(user.name);
//console.log(user.age);
/*
let Sandvich = {shashlichki: "luchok Sveshee myaso shampuri", na_prirode:"yes"};
Sandvich.shashlichki_1 = {matryoshka_chertova: "balalayka"}; 
//let shashlichki = {matryoshka_chertova: "balalayka"};
console.log(Sandvich);
let simple_car = { color: "red", power: 658 };


let user_2 = { name: "Edos", age: 19, car: Sandvich };
console.log(user_2.name);
console.log(user_2.age);
console.log(user_2.car.shashlichki + "\n " + user_2.car.na_prirode + "\n " + user_2.car.shashlichki_1.matryoshka_chertova);

//console.log(user_2.car.na_prirode);
*/

/*
let user_3 = { name: "Edos", age: 19, car: { color: "blue", power: 705 } };
let user_2 = { name: "Edos", age: 19, car: {shashlichki: "luchok Sveshee myaso shampuri", na_prirode:"yes", 
               shashlichki_1: {matryoshka_chertova: "balalayka"} } };
console.log(user_2.car.shashlichki + "\n " + user_2.car.na_prirode + "\n " + user_2.car.shashlichki_1.matryoshka_chertova);
*/

function foo(l) {
  console.log(l);
}

//foo("Sandvich")

function bar(a, b) {
  return a + b;
}
//console.log (bar (4,7));

//let BARBAR = bar(1, 228) + sus(1,228)[0];
//console.log(BARBAR);

function bar_minus(a, b) {
  return a - b;
}

function daz(cool_func, c, d) {
  return cool_func(c, d);
}

//console.log(daz(bar_minus,77,11));

function debil(a, b) {
  a *= 10;
  return a + b;
}

function Sandvich(a, b, c) {
  return { a: a, b: b, c: c };
}

//console.log(SANDViCh("хлебушек", "СВЕжее Мясо", "салатик"));

/*
function daz(cool_func, c, d) {
  let result = cool_func(c, d);
  return result;
}
*/

//let z = bar(5, 6);
//foo(z);

// foo(bar(5, 7));

// foo(daz(bar, 3, 2));

// foo(daz(daz, 3, 2));
