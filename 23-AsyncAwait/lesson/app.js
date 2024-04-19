// fetch("https://northwind.vercel.app/api/products/4");
// .then((res) => res.json())
// .then((data) => {
//   // console.log(data.supplierId);

//   fetch("https://northwind.vercel.app/api/suppliers/" + data.supplierId)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// });

// async function sayHello() {

// try{
//   await console.log("Hello");
//   await console.log("Hello");
//   await console.log("Hello");

// }catch(err){

// console.log(err)

// }finally{

//    console.log("Hello");

// }

// }

// sayHello();

// async function getData() {
//   let res = await fetch("https://northwind.vercel.app/api/products/");
//   let data = await res.json();
//   // console.log(data);

//   return data;
// }

// getData();

// console.log(getData());

// getData().then((data) => {
//   console.log(data);
// });

// async function getData() {
//   let res = await axios("https://northwind.vercel.app/api/products/");
//   console.log(res);
//   let data = res.data;

//   console.log(data);
// }

// getData();

// axios("https://northwind.vercel.app/api/products/").then((res) => {
//   console.log(res.data);
// });

// axios.delete("https://northwind.vercel.app/api/products/5");
// axios
//   .post("https://northwind.vercel.app/api/products/", {
//     name: "armud",
//   })
//   .then((data) => {
//     console.log(data);
//   });

// axios.put("https://northwind.vercel.app/api/products/5", { name: "qurban" });
// axios.patch("https://northwind.vercel.app/api/products/6", { name: "qurban" });
