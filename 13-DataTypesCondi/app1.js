// let a = 5;

// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 === 5);

// // console.log(Number("azer"));

// let res = true;

// let result = Number("true");
// result = Number(false);

// result = Number("53");
// result = String(53);
// result = String(true);

// result = String(false);
// result = Boolean(1);

// console.log("result", result);

// console.log(1 === true);
// console.log(1 < false);
// console.log(0 <= false);

// let num = 11;

// console.log(num.toString());
// console.log(+"11");

// console.log(2 + +"5");

// console.log(Number(null));

// //null false "" undefined 0

// console.log(1 != 1); // ==
// console.log(1 !== 1); // ===

// let name = "gurban";

// let hava = "sun";

// console.log(hava == "sun");

// if (hava == "sun") {
//   console.log("isiqlar sonludur ");
// }

// if (hava == "moon") {
//   console.log("isiqlar yansin ");
// }

// let age = "sdfgh";
// let height = 190;

// if (age >= 18 || height > 180) {
//   console.log("welcome");
// } else if (age > 0) {
//   console.log("good bye");
// } else {
//   console.log("duzgun deyer daxil edin");
// }

// let result = 63;

// if (result >= 51 && result < 61) {
//   console.log("E");
// } else if (result >= 61) {
//   console.log("D");
// } else {
//   console.log("break");
// }

// console.log(2 > 1 && 2 > 0);
// console.log(2 > 1 && 2 > 10 && 2 > 1 && 2 > 10);

// console.log(2 < 1 || 20 > 10);

// let result = 63;

// if (result >= 51 && result < 61) {
//   console.log("E");
// }

// if (result >= 61) {
//   console.log("D");
// } else {
//   console.log("break");
// }

// let num1 = 31;
// let num2 = 20;

// if (num1 > num2) {
//   console.log("1-ci eded 2-ciden boyukdur");
//   console.log(`${num1} boyukdur ${num2} - dan`);
//   console.log(`bu ededlerin cemi ${num1 + num2}`);
// } else if (num2 > num1) {
//   console.log("2-ci eded 1-ciden boyukdur");
// } else {
//   console.log("2-ci eded 1-ci edede beraberdir");
// }

// let temp = 100;

// console.log(typeof temp);

// if (typeof temp == "number") {
//   console.log("duzgun data daxil etmisiniz");

//   if (temp <= 0) {
//     console.log("su donur");
//   } else if (temp < 100) {
//     console.log("su mayedir");
//   } else {
//     console.log("su buxardir");
//   }
// } else {
//   console.log("duzgun data daxil edin");
// }

let balance = "";

if (typeof balance == "number" && balance * 1 == balance) {
  if (balance >= 0.4) {
    console.log("welcome");
    console.log(`qaliq balans-${balance - 0.4}`);
  } else if (balance < 0.4) {
    console.log("kasib");
    console.log(`catismayan balans-${0.4 - balance}`);
  } else if (balance == "NaN") {
    console.log("Error");
  }
} else {
  console.log("Error");
}

// console.log(NaN == NaN);
// console.log(NaN >= NaN);
// console.log(NaN <= NaN);
// console.log(NaN < NaN);
// console.log(NaN > NaN);

// console.log(typeof NaN);
