// let obj = {
//   id: 1,
//   name: "gurban",
//   student: false,
//   hobbies: ["f1", "instagram"],
//   age: 30,
// };

// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// obj.surname = "gurbanzada";
// console.log(obj);
// console.log(obj["name"]);

let students = [
  {
    id: 1,
    name: "omar",
    hobbies: ["book", "cyrpto", "coding"],
    fail: true,
  },

  {
    id: 2,
    name: "said",
    hobbies: ["book", "cinema", "gym"],
    fail: false,
  },
  {
    id: 3,
    name: "shovgu",
    hobbies: ["music", "gaming"],
    fail: true,
  },
];
let count = 0;
let sum = 0;

for (let i = 0; i < students.length; i++) {
  // console.log(students[i]);
  //   console.log(students[i].name);
  //   console.log(students[i].name);
  //   console.log(students[i].id);

  sum = sum + students[i].id;

  if (students[i].fail == true) {
    for (let j = 0; j < students[i].hobbies.length; j++) {
      //   console.log(students[i].hobbies[j].length);
      count++;
    }
  }
}

// console.log(count);
// console.log("sum", sum);

// for of for in forEach

let arr = [1, 2, 3, 4];

for (let elem of arr) {
  //   console.log(elem);
  //   console.log(arr[elem]);
}

for (let elem of students) {
  //   console.log(elem.name);
  //   console.log(arr[elem]);
}

for (let index in arr) {
  //   console.log(index);
  //   console.log(arr[index]);
  //   console.log(arr[index]);
}

// arr.forEach((elem) => {
//   console.log(elem);
// });

// let obj = {
//   id: 1,
//   name: "gurban",
//   student: false,
//   hobbies: ["f1", "instagram"],
//   age: 30,
// };

// for (let key in obj) {
//   console.log(obj[key]);
// }

let res = [5, 3, -4, -5, 6, -7, 99, 0, 11];

let max = res[0];

for (let i = 0; i < res.length; i++) {
  if (res[i] > max) {
    max = res[i];
  }
}
