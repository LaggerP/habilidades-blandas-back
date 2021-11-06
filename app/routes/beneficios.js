const router = require("express").Router();
const categorias = require("../controllers/beneficios.controller");

router.get("/", categorias.getAllBeneficios);
router.post("/", categorias.postBeneficios);

module.exports = router;
