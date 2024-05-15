const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/userController");

router.get("/users", UserController.getUserAll);
router.post("/users", UserController.postUser);
router.get("/users/:id", UserController.getUserById);
router.delete("/users/:id", UserController.deleteUserById);
router.patch("/users/:id", UserController.patchUserById);
router.put("/users/:id", UserController.putUserById);

module.exports = router;
