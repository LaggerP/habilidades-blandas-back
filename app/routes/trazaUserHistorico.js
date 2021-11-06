const router = require('express').Router();
const trazaUserHistorico = require('../controllers/trazaHistoricoUsuarios.controller.js');

router.get('/:userId', trazaUserHistorico.getPointsByUserId);
router.post('/',trazaUserHistorico.createHistorialPorUsuario)

module.exports = router;