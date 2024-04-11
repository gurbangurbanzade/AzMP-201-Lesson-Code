let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];
let arr = [1, 3, 9, 30, 21];
console.log(students);
console.log(arr);

let result;

// arr.forEach();
// arr.forEach((elem, i, arr) => {
//   console.log(elem, i, arr);
// });

// students.forEach((student, i, fatime) => {
//   console.log(student.name, i, fatime);
// });

// result = students.map((student) => {
//   return student;
// });

// result = arr.map((elem) => {
//   //   return elem ** 2;
//   return elem + 1;
// });

// result = arr.flatMap((elem) => {
//   return elem;
// });
// result = arr
//   .flatMap((elem) => {
//     return elem;
//   })
//   .map((elem) => elem ** 2);
// result = arr.map((elem) => {
//   return elem;
// });

// result = students.filter((elem) => elem.name == "Nurane");
// result = students.filter((elem) => elem.loginDetail.password.includes("123"));
// result = students
//   .filter((elem) => elem.fail == false)
//   .map((elem) => {
//     let fullName = elem.name + " " + elem.surname;
//     return fullName;
//   })
//   .filter((elem) => elem.length > 19);

// let sum = (a, b) => a + b;

// console.log(sum(3, 5));

// let a = 3;

// a > 0 ? console.log("musbet") : console.log("menfi");

// result = students.find((elem) => elem.name == "Elmir");

// result = arr.reduce((acc, elem, i, arr) => {
//   //   acc.push(elem ** 2);
//   console.log(arr);
//   return acc + elem;
// }, 100);

// result = arr.every((elem) => elem > 1);
result = arr.some((elem) => elem > 1);

// let a = "ABCDEFG";
// result = Array.from(a);
// console.log(result);

let arr2 = ["qurban", "eli", "veli"];
result = arr2.entries();
result = arr2.keys();

for (let res of result) {
  //   console.log(res);
}

result = arr2.with(1, "shovgu");

// console.log("result", result);

// dest spread rest

let names = ["qurban", "eli", "veli", [1, 2]];
let name3 = ["qurban", "eli", "veli"];

console.log("names", names);

// let names2 = names;
// names2[0] = "shovgu";
// console.log("names", names);
// console.log("names2", names2);

let names2 = [...names, ...name3];
names2[0] = "shovgu";
names2[3][0] = "shovgu";

console.log("names", names);
console.log("names2", names2);

let name5 = ["qurban", "eli", "veli", "qurban", "eli", "veli"];

let [name11, name22, name33, ...adlar] = name5;

// console.log(name11);
// console.log(name22);
// console.log(name33);
// console.log(adlar);

// console.log(Math.max(...arr));
// console.log(Math.max(1, 2, 3));

// let tarix = new Date();

// console.log(tarix);

let obj = {
  name: "gurban",
  age: 30,
  surname: "gurbanzade",
};

console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log("---------------------------------------------");

result = students
  .reduce((acc, elem) => {
    acc.push(elem.hobbies);
    return acc;
  }, [])
  .flat();
// console.log(result);

result = students.filter((elem) => {
  console.log(elem.hobbies);

  return elem.hobbies.includes("gaming");
});
console.log(result);
