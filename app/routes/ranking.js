const router = require('express').Router();
const ranking = require('../controllers/ranking.controller.js');

router.get('/get', ranking.getRankingGeneral);

module.exports = router;
