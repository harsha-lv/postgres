const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getUsernames);
router.get("/new", userController.createUsernameGet);
router.post("/new", userController.createUsernamePost);
router.get("/delete", userController.deleteUsernames);

module.exports = router;
