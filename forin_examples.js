// FOR .. OF

/*
let arr1 = [10, 12, 14];

for (let n of arr1) {
  console.log(n * n);
}
// 100 144 196

/*
let stringulya = "be cool";
for (let c of stringulya) {
  console.log(c);
}
//b e ' ' c o o l

/*
let arr2 = [12, 14, 10];
let arr3 = [17, 16, 15, 12];

for (let ni of arr2) {
  for (let nj of arr3) {
    if (ni == nj) {
      console.log("Found this dude: " + ni);
    }
  }
}

/*
let library = [
  {
    book: "nice james",
    cost: 125,
    cover_color: "green",
  },
  {
    book: "Boys",
    cost: 250,
    cover_color: "orange",
  },
  {
    book: "vigor",
    cost: 400,
    cover_color: "yellow",
  },
  {
    book: "teleports",
    cost: 120,
    cover_color: "green",
  },
];


function getFirstBookByColor(books, color) {
  for (let book of books) {
    if (book.color == color) return book;
  }
}

console.log(getFirstBookByColor(library, "orange"));

/*

function getAllBooksByColor(books, color) {
  let result = [];
  for (let book of books) {
    if (book.color == color) result.push(book);
  }
  return result;
}

console.log(getAllBooksByColor(library, "green"));

*/
