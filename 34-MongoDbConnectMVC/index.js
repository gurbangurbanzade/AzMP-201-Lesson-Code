const express = require("express");
var bodyParser = require("body-parser");
require("./src/config/db");
const routes = require("./src/routes/userRoute");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/api", routes);

// new

// app.get("/", (req, res) => {
//   res.send(arr);
// });

// app.get("/:id", (req, res) => {
//   let findElem = arr.find((elem) => elem.id == req.params.id);
//   res.send(findElem);
// });

// app.delete("/:id", (req, res) => {
//   let findElems = arr.filter((elem) => elem.id != req.params.id);
//   res.send(findElems);
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
//   arr.push(req.body);
//   res.send("post olundu");
// });

// app.put("/:id", (req, res) => {
//   let id = req.params.id;

//   let obj = req.body;
//   let elem = arr.findIndex((el) => el.id == id);
//   arr[elem] = { id: id, ...obj };
//   res.send(arr);
// });

// app.patch("/:id", (req, res) => {
//   let id = req.params.id;
//   let obj = req.body;
//   let elemIndex = arr.findIndex((el) => el.id == id);
//   let elem = arr.find((el) => el.id == id);

//   arr[elemIndex] = { ...elem, ...obj };
//   res.send(arr);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
