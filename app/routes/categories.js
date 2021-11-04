const router = require("express").Router();
const categories = require("../controllers/category.controller");

router.get("/", categories.getAllCategories);
router.post("/", categories.postCategory);

module.exports = router;
