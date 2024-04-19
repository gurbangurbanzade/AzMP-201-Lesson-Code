const basket = JSON.parse(localStorage.getItem("basket")) || [];
const homePage = document.querySelector(".homePage");
const basketPage = document.querySelector(".basketPage");
const favPage = document.querySelector(".favPage");
const loader = document.querySelector(".loader");
const countFav = document.querySelector(".counter");

console.log(loader);
let favorite = JSON.parse(localStorage.getItem("fav")) || [];
function changeCount() {
  countFav.innerText = favorite.length;
}
changeCount();

favorite.forEach((elem) => {
  //   createCard(elem, homePage);
  homePage.innerHTML += `
      <div class="product-card">
          <img class="prodImg" src=${elem.image} />
          <div class="card-content">
            <h3>${elem.id}-${elem.title.slice(0, 15)}</h3>
            <p>
              This is a simple product card design with basket and 
            </p>
            <div class="button-container">
              <button data=${
                elem.id
              } class="basket-btn prodBasketBtn">Basket</button>
              <button data=${
                elem.id
              } class="favorite-btn prodFavBtn red">Favori</button>
            </div>
          </div>
        </div>
      `;

  const prodFavBtns = document.querySelectorAll(".prodFavBtn");

  for (let prodFavBtn of prodFavBtns) {
    prodFavBtn.addEventListener("click", (e) => {
      Toastify({
        text: "silindi",

        duration: 3000,
      }).showToast();

      const checkItem = favorite.find(
        (elem) => elem.id == e.target.getAttribute("data")
      );

      //   let elem = data.find((elem) => elem.id == e.target.getAttribute("data"));

      favorite = favorite.filter((elem) => elem.id != checkItem.id);
      localStorage.setItem("fav", JSON.stringify(favorite));
      //   console.log(e.target.parentElement.parentElement.parentElement);
      e.target.parentElement.parentElement.parentElement.remove();
      changeCount();
    });
  }
});
