// Вернуть массив из первых букв всего слов в массиве
const inp1 = ["a cat", "mastur", "aboba", "nig", "usiki"]; 

function outputFunction(el) {
  return el[0];
}

const outputArray = inp1.map(outputFunction);
console.log(outputArray); //0

// console.log(inp1.map(el => el[1]));
