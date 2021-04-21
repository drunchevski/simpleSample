// Вернуть массив из количеств денег персонажей

const inp2 = [
  ["vasua", 12500],
  ["natasha", 100],
  ["monke", 3350],
].map((el) => ({ name: el[0], cash: el[1] }));

function outputFunction(el) {
  return el.cash;
}

const outputArray = inp2.map(outputFunction);
console.log(outputArray);

// console.log(inp2.map(el => el.cash));
