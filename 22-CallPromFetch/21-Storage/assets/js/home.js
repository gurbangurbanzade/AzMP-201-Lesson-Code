const basket = JSON.parse(localStorage.getItem("basket")) || [];
const homePage = document.querySelector(".homePage");
const basketPage = document.querySelector(".basketPage");
const favPage = document.querySelector(".favPage");
const loader = document.querySelector(".loader");
const countFav = document.querySelector(".counter");

const searchText = document.querySelector(".searchText");
const searchBtn = document.querySelector(".searchBtn");
const az = document.querySelector(".az");
const za = document.querySelector(".za");

let favorite = JSON.parse(localStorage.getItem("fav")) || [];

function changeCount() {
  countFav.innerText = favorite.length;
}
changeCount();
// loader.style.display = "none";
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    let mainData = data;
    createCard(data);
    console.log(data);

    searchBtn.addEventListener("click", function () {
      console.log(searchText.value);

      mainData = mainData.filter((elem) =>
        elem.title.toUpperCase().includes(searchText.value.toUpperCase())
      );
      createCard(mainData);
    });

    searchText.addEventListener("input", function () {
      console.log(searchText.value);

      mainData = data.filter((elem) =>
        elem.title.toUpperCase().includes(searchText.value.toUpperCase())
      );
      createCard(mainData);
    });

    // az.addEventListener("click", function () {
    //   console.log(searchText.value);

    //   mainData = mainData.sort((a, b) => b.price - a.price);
    //   createCard(mainData);
    // });
    // za.addEventListener("click", function () {
    //   console.log(searchText.value);

    //   mainData = mainData.sort((a, b) => a.price - b.price);
    //   createCard(mainData);
    // });

    az.addEventListener("click", function () {
      console.log(searchText.value);

      mainData = mainData.sort((a, b) => a.title.localeCompare(b.title));
      createCard(mainData);
    });
    za.addEventListener("click", function () {
      console.log(searchText.value);

      mainData = mainData.sort((a, b) => b.title.localeCompare(a.title));
      createCard(mainData);
    });

    const prodFavBtns = document.querySelectorAll(".prodFavBtn");

    for (let prodFavBtn of prodFavBtns) {
      prodFavBtn.addEventListener("click", (e) => {
        const checkItem = favorite.find(
          (elem) => elem.id == e.target.getAttribute("data")
        );

        let elem = data.find(
          (elem) => elem.id == e.target.getAttribute("data")
        );

        if (checkItem) {
          Toastify({
            text: "mehsul favdan silindi",

            duration: 3000,
            style: {
              background: "red",
            },
          }).showToast();
          e.target.style.backgroundColor = "gray";
          favorite = favorite.filter(
            (elem) => elem.id != e.target.getAttribute("data")
          );
          localStorage.setItem("fav", JSON.stringify(favorite));
        } else {
          Toastify({
            text: "mehsul elave olundu",

            duration: 3000,
            style: {
              background: "green",
            },
          }).showToast();
          e.target.style.backgroundColor = "red";
          favorite.push(elem);
          localStorage.setItem("fav", JSON.stringify(favorite));
        }
        changeCount();
      });
    }

    const productCards = document.querySelectorAll(".product-card");

    for (let productCard of productCards) {
      productCard.addEventListener("click", (e) => {
        window.location.href = `./detail.html?id=${e.target.getAttribute(
          "data"
        )}`;
      });
    }
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    // loader.style.display = "none";
    // loader.style.display = "none";
  });

function createCard(data) {
  homePage.innerHTML = "";

  data.forEach((elem) => {
    //   createCard(elem, homePage);
    loader.style.display = "none";
    homePage.innerHTML += `
        <div data=${elem.id} class="product-card">
            <img class="prodImg" src=${elem.image} />
            <div class="card-content">
              <h3>${elem.title.slice(0, 15)}</h3>
              <p>
                This is a simple product card design with basket and 
              </p>
              <p>
             ${elem.price}
            </p>
              <div class="button-container">
                <button data=${
                  elem.id
                } class="basket-btn prodBasketBtn">Basket</button>
                <button data=${elem.id} class="favorite-btn prodFavBtn ${
      favorite.find((favElem) => favElem.id == elem.id) ? "red" : "gray"
    }">Favori</button>
              </div>
            </div>
          </div>
        `;
  });
}
