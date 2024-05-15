const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: String,
  age: Number,
});

module.exports = mongoose.model("User", userSchema);
