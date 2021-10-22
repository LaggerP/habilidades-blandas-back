const router = require('express').Router();
const ranking = require('../controllers/ranking.controller.js');

router.get('/', ranking.getUsersRanking);

module.exports = router;
