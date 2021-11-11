const router = require('express').Router();
const ranking = require('../controllers/ranking.controller.js');

router.get('/get', ranking.getRankingGeneral);
router.post('/categoria',ranking.getRankingFilter)
router.get('/categoria',ranking.getCategorias)

module.exports = router;
