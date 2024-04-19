// console.log("gurban");

// setTimeout(() => {
//   console.log("hello world");
// }, 1000);

// console.log("gurbanzada");

// let getName = (callback) => {
//   setTimeout(() => {
//     console.log("Gurban");
//     callback();
//   }, 1000);
// };

// let getFullname = () => {
//   setTimeout(() => {
//     console.log("Gurbanzada");
//   }, 500);
// };

// getName(getFullname);
// getFullname();

// let chek = false;

// let promise = new Promise((resolve, reject) => {
//   //   resolve("emeliyyat ugurludur");
//   //   reject("emeliyyat ugursuzdur");

//   if (chek) {
//     resolve("emeliyyat ugurludur");
//   } else {
//     reject("emeliyyat ugursuzdur");
//   }
// });

// console.log(promise);

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("emeliyyat bitti");
//   });

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
    // alert("link sehvdir");
  })
  .finally(() => {
    console.log("emeliyyat bitdi");
  });
