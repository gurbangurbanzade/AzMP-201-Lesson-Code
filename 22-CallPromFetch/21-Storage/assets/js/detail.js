let url = new URLSearchParams(location.search);

console.log(url.get("id"));

const box = document.querySelector(".box");
const id = document.querySelector(".id");
const tittle = document.querySelector(".tittle");

fetch(`https://fakestoreapi.com/products/${url.get("id")}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    id.innerHTML = data.id;
    tittle.innerHTML = data.title;
  });
