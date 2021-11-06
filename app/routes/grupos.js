const router = require("express").Router();
const grupos = require("../controllers/group.controller");

router.get("/", grupos.getAllGrupos);
router.post("/",grupos.createGrupo)

module.exports = router;
