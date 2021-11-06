const router = require("express").Router();
const user = require("../controllers/users.controller.js");

router.get("/:userId", user.getUserDataByUserId);

router.post("/createUser", user.registerUser);

router.get("/get/allUsers",user.getAllUsers)

module.exports = router;
