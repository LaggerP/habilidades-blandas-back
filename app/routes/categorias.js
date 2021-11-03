const router = require("express").Router();
const categorias = require("../controllers/category.controller");

router.get("/", categorias.getAllCategorias);
router.post("/", categorias.postCategory);

module.exports = router;
