// Обьекты

let a = {}; // Переменной a присваивается пустой объект
let b = { age: 25 }; // Обьект с полем age и его значением 25
b.age; // получить значение поля age обьекта b
b["age"]; // аналогично

b.age = 30; // присвоить значение 30 полю age обьекта b (25 -> 30)

// Массивы
let arr1 = ["test", "string", "hello"];
arr1[0]; //"test"
arr1[0] = "nottest"; // "test" -> "nottest" в масссиве arr1

let arr2 = [{ age: 35 }, { age: 51 }, { age: 45 }]; //Массив обьектов

arr2[0].age; // 35
arr2[0].age = 45; // 35 -> 45
arr2[0].age += 15; // 45 -> 60

let arr3 = [{ age: 15 }, { age: 40 }];

function func1(el) {
  console.log(el.age);
}

arr3.forEach(func1); // Вызвать функцию func1 над каждым элементом массива arr3. К
// Выведется 15, 40. Сам метод forEach не возвращает ничего

let ages = [];
function func2(el) {
  ages.push(el.age); // добавить текущий элемент в массив agess
}
arr3.forEach(func2);
console.log(ages); //  [15, 40]

function func3(el) {
  return el;
}
let ages = arr3.map(func3); // Вызвать функцию func3 над каждым элементом, её результат (return) записать в массив, который вернется из метода.
// Те после того как выполнится map arr3.map(func3) "заменится" на результируюший массив
let ages = [15, 40];

// [..].indexOF(item) - метод массива, принимает элемент который нужно найти в массиве
ages.indexOf(40); // 1;
