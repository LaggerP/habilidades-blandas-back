const router = require("express").Router();
const beneficios = require("../controllers/beneficios.controller");

router.get("/", beneficios.getAllBeneficios);
router.post("/", beneficios.postBeneficios);
router.patch("/points/:userId", beneficios.changePoints);

module.exports = router;
