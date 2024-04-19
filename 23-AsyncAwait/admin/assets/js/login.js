import {
  getDatas,
  deleteById,
  getDataById,
  patchById,
  postDatas,
} from "./requests.js";
import { ProductURL, UserURL } from "./baseURL.js";

let table = document.querySelector(".tBody");
const modal = document.querySelector(".modal-body");
const saveData = document.querySelector(".saveData");

async function createTable() {
  let data = await getDatas(ProductURL);
  data.forEach((elem) => {
    // console.log(elem);
    let tr = document.createElement("tr");
    let idTd = document.createElement("td");
    let titleTd = document.createElement("td");
    let deleteTd = document.createElement("td");
    let deleteBtn = document.createElement("button");
    let editTd = document.createElement("td");
    let editBtn = document.createElement("button");

    deleteBtn.setAttribute("data", elem.id);
    editBtn.setAttribute("data", elem.id);
    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#exampleModal");

    deleteBtn.className = "btn btn-danger";
    editBtn.className = "btn btn-warning";

    idTd.innerText = elem.id;
    titleTd.innerText = elem.title;
    deleteBtn.innerText = "Delete";
    editBtn.innerText = "Edit";

    deleteBtn.addEventListener("click", (e) => {
      deleteById(ProductURL, e.target.getAttribute("data"));
      e.target.parentElement.parentElement.remove();
    });

    editBtn.addEventListener("click", async (e) => {
      let elem = await getDataById(ProductURL, e.target.getAttribute("data"));
      console.log(elem);
      modal.innerHTML = `
      <p>ID</p>
      <p class="elemId">${elem.id}</p>
      <label for="">Title</label>
      <input class="elemTitle" type="text" value=${elem.title} />
      <br />
      <label for="">Img</label>
      <input class="elemImg" type="text" value=${elem.image} />
      <br />
      <label for="">Price</label>
      <input class="elemPrice" type="text" value=${elem.price} />
        `;
    });

    deleteTd.append(deleteBtn);
    editTd.append(editBtn);

    tr.append(idTd, titleTd, deleteTd, editTd);
    // table.append(tr);
  });
}

createTable();

// saveData.addEventListener("click", async () => {
//   const id = document.querySelector(".elemId");
//   const title = document.querySelector(".elemTitle");
//   const image = document.querySelector(".elemImg");
//   const price = document.querySelector(".elemPrice");

//   let obj = await getDataById(ProductURL, id.innerText);

//   obj.title = title.value;
//   obj.image = image.value;
//   obj.price = price.value;

//   await patchById(ProductURL, id.innerText, obj);
// });

const postData = document.querySelector(".postData");
const name = document.querySelector(".titleElem");
const pass = document.querySelector(".imgElem");
const admin = document.querySelector(".admin");

postData.addEventListener("submit", async (e) => {
  e.preventDefault();
  let obj = {
    name: name.value,
    pass: pass.value,
  };

  let allUsers = await getDatas(UserURL);

  let finduser = allUsers.find(
    (elem) => elem.name == obj.name && elem.pass == obj.pass
  );

  if (finduser) {
    console.log("xos gelmisiz");

    finduser.isAdmin
      ? localStorage.setItem("muavin", JSON.stringify(true))
      : localStorage.setItem("muavin", false);
  } else {
    console.log("xos getdin");
  }

  JSON.parse(localStorage.getItem("muavin"))
    ? (admin.style.display = "block")
    : (admin.style.display = "none");

  console.log(allUsers);
  console.log(obj);
});
