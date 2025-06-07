const express = require("express");
const router = express.Router();
const { createNewUser, getAllUsers, getUserById, UpdatedUser, UserDelete} = require("../controller/user.controler");

// Route to create a new user
router.route("/create").post(createNewUser);
router.route("/getall").get(getAllUsers);
router.route("/getid/:id").get(getUserById);
router.route("/Update/:id").patch(UpdatedUser);
router.route("/delete/:id").delete(UserDelete)

module.exports = router;