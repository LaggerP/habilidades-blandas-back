const router = require("express").Router();
const user = require("../controllers/users.controller.js");

router.get("/:userId", user.getUserDataByUserId);

router.post("/createUser", user.registerUser);

module.exports = router;
