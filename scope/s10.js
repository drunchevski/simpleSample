function lul(value) {
    function kek(diff) {
        value += diff;
        return value;
    }
    return kek;
}

let kekw = lul(15);

console.log(kekw(2)); //17
console.log(kekw(2)); //19

console.log(kekw(-1000)); //-981
console.log(kekw(1200)); //219

kekw = lul(0); //kek
   console.log(kekw(10)); //10
 console.log(kekw(-100)); //-90