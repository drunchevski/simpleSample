// Вывести всех существ в формате  "dog_busya" ( `${id}${name}` );
// Вывести всех существ в формате ["busya", 4]

const inp3 = [
  { name: "busya", id: 0, specie: "dog" },
  { name: "luka", id: 2, specie: "chicken" },
  { name: "SPIDERTRON_8000", id: 3, specie: "spider" },
  { name: "creeper_228", id: 3, specie: "spider" },
  { name: "meowth", id: 1, specie: "spider" },
];

const id_table = ["dog_", "cat_", "chicken_", "spider_"];

const legs = {
  dog: 4,
  cat: 4,
  chicken: 2,
  spider: 8,
};

function outputFunction(el) {
  return 0;
}

const outputArray = inp3.map(outputFunction);
console.log(outputArray);

// console.log(inp4.map((el) => `${id_table[el.id]}${el.name}`));
// console.log(inp3.map((el) => [el.name, legs[el.specie]]));
