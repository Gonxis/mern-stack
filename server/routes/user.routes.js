const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.route("/signup").post(UserController.signUp);

router.route("/signin").post(UserController.signIn);

router.route("/signout").post(UserController.signOut);

module.exports = router;
