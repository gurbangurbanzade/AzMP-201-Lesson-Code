let users = [
  {
    id: 1,
    username: "gurban",
    password: "123",
  },
  {
    id: 2,
    username: "guri",
    password: "123",
  },
];

// const page = JSON.parse(localStorage.getItem("isLogin"));
const page = true;

if (page) {
  window.location.href = "home.html";
} else {
  const valid = document.querySelector(".valid");
  const password = document.querySelector("#password");
  const username = document.querySelector("#username");

  valid.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      users.find((elem) => {
        return (
          elem.password == password.value && elem.username == username.value
        );
      })
    ) {
      localStorage.setItem("isLogin", JSON.stringify(true));
      window.location.href = "home.html";
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Yalnis istifadeci",
        footer: '<a href="./index.html">Why do I have this issue?</a>',
      });
    }
  });
}
