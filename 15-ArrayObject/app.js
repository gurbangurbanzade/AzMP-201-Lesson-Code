"use strict";

let arr2 = [1, "gurban", null, NaN, undefined, true, { id: 1, name: "gurban" }];
//         0  1  2  3  4
let arr = [1, 2, 3, 4, 5];

console.log(arr.length);
console.log(arr[4]);

// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }

for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}

let arr3 = [1, 2];
let arr4 = [1, 2];

if (arr3 == arr4) {
  console.log("beraberdir");
}
let arr5 = arr3;

arr5[1] = 3;

console.log("arr3", arr3);
console.log("arr5", arr5);

let a = 3;
let b = a;

b = 5;

console.log(a);
console.log(b);

// arrr[3] = "qurban";

// array.push(6);
// array.push(7);

// array[5] = "6";
// array[6] = "7";
// array[array.length] = "8";
// array[array.length] = "9";

// array.length = 8;
// array[array.length] = "9";
// array[5] = true;

// console.log(array);
// console.log(array);

let array = [1, 2, 3, 4, 5];
let array1 = [];
for (let i = 0; i < array.length; i++) {
  array1.push(array[i] ** 2);
}
console.log(array);
console.log(array1);
