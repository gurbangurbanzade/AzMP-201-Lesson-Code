const mongoose = require("mongoose"); // new

mongoose
  .connect(
    "mongodb+srv://gurbangurbanzadeh:12345@cluster1.juii7ci.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => {
    console.log("db connect");
  })
  .catch((err) => console.log(err));
