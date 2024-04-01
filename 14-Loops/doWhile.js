let i = 5;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

let j = 40;

do {
  console.log(j);
  j++;
} while (j < 5);

// let balance = 50;

alert("xos gelmisiniz.");

let balance = prompt("pulunuzu daxil edin");
console.log(balance);

// let key = prompt("// 1 balans goster 2 pul cixars 3 medaxil 4 cixis");

// 1 balans goster
// 2 pul cixars
// 3 medaxil
// 4 cixis
let money;
j = 0;
let abc;
do {
  if (j == 0) {
    abc = prompt("// 1 balans goster 2 pul cixars 3 medaxil 4 cixis");
    console.log("key", abc);
  }

  switch (abc) {
    case "1":
      //   alert("balance-", balance);
      console.log("balance-", balance);
      j--;
      abc = prompt("// 1 balans goster 2 pul cixars 3 medaxil 4 cixis");
      break;
    case "2":
      money = prompt("cixarmaq istediyiniz meblegi secin");
      balance = balance - money;
      console.log("balance-", balance);
      j--;
      abc = prompt("// 1 balans goster 2 pul cixars 3 medaxil 4 cixis");
      break;
    // case "3":
    //   console.log("balance-", 3);
    //   break;
    case "4":
      console.log("sagolun");
      abc = "4";
      break;

    default:
      break;
  }

  if (abc == "4") {
    j = 5;
  }
} while (j < 4);

// for (let i = 1; i <= 4; i++) {
//   switch (key) {
//     case "1":
//         alert("balance-", balance)
//       console.log("balance-", balance);
//       break;
//     case "2":
//       console.log("balance-", 2);
//       break;
//     case "3":
//       console.log("balance-", 3);
//       break;
//     case "4":
//       console.log("balance-", 4);
//       break;

//     default:
//       break;
//   }
// }
