// let a = 5;
// let b = 4;
// let sum = a + b;
// console.log(sum);

// function sum(a, b) {
//   //   console.log("hello world");
//   console.log(a + b);
//   return a + b;
// }

// sum(3, 5);
// sum(9, 7);

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// sayHello("gurban");
// sayHello("kanan");
// sayHello();

// function vuruq(a, b) {
//   console.log(a * b);
//   return a * b;
// }

// vuruq(3, 5);

// function mix(a, b) {
//   console.log(a * b - (a + b));
//   return hasil(a, b) - sum(a, b);
// }

// function hasil(a, b) {
//   return a * b;
// }

// let result = hasil(4, 5);

// console.log(result);

// console.log(mix(4, 5));
// console.log(hasil(4, 5));
// console.log(mix(4, 5));

// f(x)=2x+1
// f(1)

// let numbers = [1, 2, 3, 4, 5];

// function sumOfArray(arr) {
//   let sum = 0;
//   for (let elem of arr) {
//     sum += elem;
//   }

//   return sum;
// }

// console.log("sum", sumOfArray(numbers));

// function fullName(name = "xxx", surname = "xxx") {
//   let fullname = name + " " + surname;
//   console.log(fullname);
// }

// fullName("gurban", "gurbanzada");
// fullName("eli", "eliyev");
// fullName();

// let sum = function (a, b) {
//   console.log(a + b);
// };

// sum(3, 4);

let sum1 = (a, b) => {
  console.log(a + b);
};

// sum1(6, 8);

// (function () {
//   console.log(3 + 5);
// })();

// function sum() {
//   console.log(arguments);
// }

// sum(1, 2, 3, 4, 5);

function sumOfArray(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }

  return sum;
}

function sum(...arg) {
  console.log(arg);

  let sumOfNUmber = sumOfArray(arg);

  console.log(sumOfNUmber);
  //   console.log(arguments);
  //   console.log(a + b);
}

function fatime(...arg) {
  console.log(arg);
  console.log(a + b + c + d + e);
}

sum(1, 2, 3, 4, 5);
