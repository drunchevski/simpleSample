let e1 = 10;

function eM() {

  let e1 = 10;
  e1 += 10;
  console.log(e1+" b") //20 ВТОРОЙ ПРИОРИТЕТ
}

console.log(e1+" аа"); //10    ПЕРВЫЙ ПРИОРИТЕТ
//eM();
console.log(e1+" nsus"); //10 так всм там же лет 10 и потом +=10 разве не 20  ЛОХ
