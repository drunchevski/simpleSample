// Написать функцию, которая будет говорить допущен ли юзер к системе
// Юзер считается допущенным если хеш его айди находится среди разрешенных хешей
// Можно использовать следующие фукици/методы: get_id_hash, filter, includes, find, length, push

const get_id_hash = (id) =>
  `sha_${id + Math.round(231 / id)}_${id % 2}_${id * 10 + id * 0.1}`;

const allowed_hashes = [
  "sha_33_0_101",
  "sha_31_0_141.4",
  "sha_30_1_151.5",
  "sha_36_0_282.8",
];

const users = [
  { name: "emma", id: 11 },
  { name: "hohol", id: 10 },
  { name: "lector", id: 17 },
  { name: "victor", id: 28 },
];

function getAllowedUsers(user) {
  return 0;
}

const allowedUsers = users.filter(getAllowedUsers);
console.log(allowedUsers);

// Напистать функцию, которая будет добавлять нового юзера в базу, генерируя ему уникальный айди
function addNewUser(name) {}

// Написать функцию, которая будет давать указанному юзеру право доступа в систему
function addUserToSystem(user) {}

// Написать функцию, которая будет добавлять нового юзера в базу, если его имени нет в системе, иначе писать "ОШИБКА КОД 1488"
function addUniqueUserToSystem(user) {}

/*
console.log(
  users.filter((user) => allowed_hashes.includes(get_id_hash(user.id)))
  );
  
/*
const addNewUserR = (name) => {
  let newid = 0;
  while (users.find((user) => user.id === newid)) {
    newid++;
  }
  users.push({ name, id: newid });
};
["some", "new", "users"].forEach((u) => addNewUserR(u));

/*
const addNewUserUniqueName = (name) => {
  if (users.find((user) => user.name === name)) {
    console.log("fuck you");
    return false;
  } else {
    addNewUserR(name);
    return true;
  }
};
[..."hellotherebabulyarada"].forEach((c) => addNewUserUniqueName(c));
*/
// console.log(users);
