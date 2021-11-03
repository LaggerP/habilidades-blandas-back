const router = require("express").Router();
const trazaGrupoUsuario = require("../controllers/TrazaGrupoUsuario.controller");

router.get("/:groupId", trazaGrupoUsuario.getTrazaUserGroup);
router.post("/traza_grupo_usuarios", trazaGrupoUsuario.createTrazaUserGroup);
router.get("/count/:groupId", trazaGrupoUsuario.getCountTrazaUserGroup);

module.exports = router;
