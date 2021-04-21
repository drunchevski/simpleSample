const inp4 = [
  ["busya", "dog"],
  ["luka", "chicken"],
  ["SPIDERTRON_8000", "spider"],
  ["creeper_228", "spider"],
  ["meowth", "spider"],
];

const id_table = ["dog_", "cat_", "chicken_", "spider_"];

function outputFunction(el) {
  return {name:el[0], specie:el[1], id:id_table.indexOf(el[1] + "_")};
}

const outputArray = inp4.map(outputFunction);
console.log(outputArray);


function outputFunctin(el) {
  return [el.name, legs[el.specie]];
}

/*
outputArray2 = inp4.map((el) => ({
  name: el[0],
  specie: el[1],
  id: id_table.indexOf(el[1] + "_"),
}));
console.log(outputArray2);
// console.log(outputArray.map((el) => `${id_table[el.id]}${el.name}`));
// console.log(outputArray2.map((el) => `${id_table[el.id]}${el.name}`));
const legs = {
  dog: 4,
  cat: 4,
  chicken: 2,
  spider: 8,
};
// console.log(outputArray.map((el) => [el.name, legs[el.specie]]));
// console.log(outputArray2.map((el) => [el.name, legs[el.specie]]));
*/
