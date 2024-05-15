const User = require("./../models/userModel");

const getUserAll = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const postUser = async (req, res) => {
  const obj = req.body;
  const newUser = new User(obj);
  newUser.save();
  res.status(200).send("succes");
};

const getUserById = async (req, res) => {
  const getElem = await User.find({ _id: req.params.id })
    .then((getElem) => {
      res.status(200).send(getElem);
    })
    .catch((err) =>
      // console.log(err)
      res.status(404).send("element tapilmadi")
    );

  //   if (getElem) {
  //     res.status(200).send(getElem);
  //   } else {
  //     res.status(404).send("element tapilmadi");
  //   }
};

const deleteUserById = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id });
  res.status(200).send("silindi");
};

const patchUserById = async (req, res) => {
  const newUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body);
  res.status(200).send(newUser);
};
const putUserById = async (req, res) => {
  // id ozunden olanda

  // const getElem = await User.find({ _id: req.params.id });

  // const newUser = await User.findOneAndReplace(
  //     { _id: req.params.id },
  //     req.body{id:getElem.id,...req.body}
  //   );

  const newUser = await User.findOneAndReplace(
    { _id: req.params.id },
    req.body
  );
  res.status(200).send(newUser);
};

module.exports = {
  getUserAll,
  postUser,
  getUserById,
  deleteUserById,
  patchUserById,
  putUserById,
};
