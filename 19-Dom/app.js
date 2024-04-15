// const addTodo = document.getElementById("add");
// const addTodo = document.getElementsByClassName("addTodo");

let api = [
  {
    id: 1,
    todo: "game",
  },
  {
    id: 2,
    todo: "gym",
  },
  {
    id: 3,
    todo: "shop",
  },
];

const addTodo = document.querySelector(".addTodo");
const addTodoInp = document.querySelector(".addTodoInp");
const todoBox = document.querySelector(".todoBox");
const allDelBtn = document.querySelector(".allDelBtn");
const modalText = document.querySelector(".modalText");
const saveEdit = document.querySelector(".saveEdit");

allDelBtn.addEventListener("click", function () {
  api = [];
  createTodo();
  //   todoBox.innerHTML = "";
});
saveEdit.addEventListener("click", function () {
  //   console.log("asdfhvgksjsbkj");

  console.log(modalText.value);

  api = api.map((elem) => {
    if (elem.id == modalText.getAttribute("data")) {
      elem.todo = modalText.value;
    }
    return elem;
  });
  createTodo();
});

addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(api);
  let obj = {
    id: api.length + 1,
    todo: addTodoInp.value,
  };
  api.push(obj);
  createTodo();
  addTodoInp.value = "";
});
createTodo();

function createTodo() {
  todoBox.innerHTML = "";

  //   todoBox.innerHTML +=
  // `
  // <div class="todoItem">
  // <p>${addTodoInp.value}</p>
  // </div>
  // `;

  api.forEach((element, index) => {
    const todoItem = document.createElement("div");
    const todoText = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    todoItem.className = "todoItem card";
    todoText.className = "todoText card-body";
    deleteBtn.className = "deleteBtn btn btn-danger ms-2";
    editBtn.className = "editBtn btn btn-warning ";

    todoText.innerText = index + 1 + "-" + element.todo;
    deleteBtn.innerText = "Delete";
    editBtn.innerText = "Edit";
    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#exampleModal");
    editBtn.setAttribute("data", element.id);
    deleteBtn.setAttribute("id", element.id);
    todoItem.append(todoText, editBtn, deleteBtn);
    todoBox.appendChild(todoItem);

    // <div class="card">
    //   <div class="card-body">This is some text within a card body.</div>
    // </div>;

    deleteBtn.addEventListener("click", function (e) {
      //   console.log(e.target);
      //   console.log(e.target.getAttribute("id"));

      api = api.filter((elem) => elem.id != e.target.getAttribute("id"));
      createTodo();
      //   e.target.parentElement.remove();

      // e.target.parentElement.nextElementSibling.remove();
      //   e.target.previousElementSibling.remove();
    });

    editBtn.addEventListener("click", function (e) {
      console.log(e.target.getAttribute("data"));
      console.log(modalText);
      modalText.value = api.find(
        (elem) => elem.id == e.target.getAttribute("data")
      ).todo;

      modalText.setAttribute("data", e.target.getAttribute("data"));
    });

    // editBtn.addEventListener("click", (e) => {
    //   //   console.log(e.target);

    //   console.log(this);
    // });
  });
}

// const todoItem = document.querySelector(".todoItem");
// const todoText = document.querySelector(".todoText");
// const deleteBtn = document.querySelector(".deleteBtn");

// todoItem.addEventListener("click", () => {
//   console.log("todoItem");
// });
// todoText.addEventListener("click", () => {
//   console.log("todoText");
// });
// deleteBtn.addEventListener("click", (e) => {
//   e.stopPropagation();

//   console.log("deleteBtn");
// });
