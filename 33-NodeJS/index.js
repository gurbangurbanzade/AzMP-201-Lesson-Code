const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

let arr = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
];

app.get("/", (req, res) => {
  res.send(arr);
});

app.get("/:id", (req, res) => {
  let findElem = arr.find((elem) => elem.id == req.params.id);
  res.send(findElem);
});

app.delete("/:id", (req, res) => {
  let findElems = arr.filter((elem) => elem.id != req.params.id);
  res.send(findElems);
});

app.post("/", (req, res) => {
  console.log(req.body);
  arr.push(req.body);
  res.send("post olundu");
});

app.put("/:id", (req, res) => {
  let id = req.params.id;

  let obj = req.body;
  let elem = arr.findIndex((el) => el.id == id);
  arr[elem] = { id: id, ...obj };
  res.send(arr);
});

app.patch("/:id", (req, res) => {
  let id = req.params.id;
  let obj = req.body;
  let elemIndex = arr.findIndex((el) => el.id == id);
  let elem = arr.find((el) => el.id == id);

  arr[elemIndex] = { ...elem, ...obj };
  res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
