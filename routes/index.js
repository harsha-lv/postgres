const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.listUsernames);
router.get("/new", userController.showNewUserForm);
router.post("/new", userController.createUser);

module.exports = router;
