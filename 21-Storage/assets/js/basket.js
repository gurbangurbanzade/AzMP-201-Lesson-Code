let basket = JSON.parse(localStorage.getItem("basket")) || [];

const cartBox = document.querySelector(".cart-items");
const totalPrice = document.querySelector(".totalPrice");

createCard();

function createCard() {
  let sum = 0;
  let totalPrices;
  cartBox.innerHTML = "";
  basket.forEach((elem) => {
    cartBox.innerHTML += `
    <li class="cart-item">
              <img src=${elem.image} alt="Product Image" />
              <div class="item-details">
                <h3>${elem.id}-${elem.title}</h3>
                <p>Price: $ ${elem.price}</p>
                <p>Quantity: <span class="quantity">${elem.count}</span></p>
                <p>Total Price: $ ${elem.price * elem.count}</p>
                <div class="quantity-buttons">
                  <button data=${elem.id} class="decrement-button">-</button>
                  <button data=${elem.id} class="increment-button">+</button>
                </div>
              </div>
              <button data=${elem.id} class="remove-button">Remove</button>
            </li>
    `;
    // inc
    const incBtns = document.querySelectorAll(".increment-button");
    for (let incBtn of incBtns) {
      incBtn.addEventListener("click", (e) => {
        basket.find(
          (elem) => elem.id == e.target.getAttribute("data")
        ).count += 1;
        localStorage.setItem("basket", JSON.stringify(basket));
        cartBox.innerHTML = "";
        createCard();
      });
    }

    // dec
    const decBtns = document.querySelectorAll(".decrement-button");
    for (let decBtn of decBtns) {
      decBtn.addEventListener("click", (e) => {
        if (
          basket.find((elem) => elem.id == e.target.getAttribute("data"))
            .count <= 1
        ) {
          basket = basket.filter(
            (elem) => elem.id != e.target.getAttribute("data")
          );

          createCard();
        } else {
          basket.find(
            (elem) => elem.id == e.target.getAttribute("data")
          ).count -= 1;
          localStorage.setItem("basket", JSON.stringify(basket));
          cartBox.innerHTML = "";
          createCard();
        }
      });
    }
    const removeItems = document.querySelectorAll(".remove-button");
    for (let removeItem of removeItems) {
      removeItem.addEventListener("click", (e) => {
        basket = basket.filter(
          (elem) => elem.id != e.target.getAttribute("data")
        );
        createCard();
        localStorage.setItem("basket", JSON.stringify(basket));
      });
    }

    totalPrices = elem.price * elem.count;
    sum += totalPrices;
    // console.log(totalPrice.innerText);
  });
  totalPrice.innerText = Math.floor(sum);
}
