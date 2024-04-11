// console.log(document);
// console.log(document.location.href);

// console.log(window.document);

// alert("salam");

// alert("salam");

// console.log(document.body);

let btn = document.querySelector(".btn");
let box = document.querySelector(".box");

// console.log(btn);

// let sayHello = () => {
//   console.log("salam DOM");
// };

// btn.addEventListener("click", sayHello);

// // function sayHello() {
// //   console.log("salam DOM");
// // }

btn.addEventListener("click", function () {
  if (box.style.backgroundColor == "blue") {
    box.style.backgroundColor = "red";
  } else {
    box.style.backgroundColor = "blue";
  }
  box.innerHTML = "";
});

for (let i = 0; i < 101; i++) {
  box.innerHTML += ` <div class="boxItem"></div>`;
}

let input = document.querySelector(".inp");
let getData = document.querySelector(".getData");
let warning = document.querySelector(".warning");

getData.addEventListener("click", function () {
  console.log(input.value);

  if (input.value.length < 5) {
    warning.style.display = "block";
  } else {
    if (input.value.length > 5) {
      let count = 0;
      for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] * 1 == Number(input.value[i])) {
          count++;
        }
      }

      if (count < 1) {
        //   console.log("eded daxil edin");
        warning.style.display = "block";
      } else {
        warning.style.display = "none";
        input.value = "";
      }
    } else {
      input.value = "";
      warning.style.display = "none";
    }
  }

  //
});
