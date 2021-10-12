const router = require('express').Router();
const user = require('../controllers/users.controller.js');

router.get('/:userId', user.getUserDataByUserId);

module.exports = router;
