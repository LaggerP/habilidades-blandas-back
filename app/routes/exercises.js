const router = require('express').Router();
const exercise = require('../controllers/exercise.controller.js');

router.get('/:userId', exercise.getExercisesByUserId)
router.patch('/:userExerciseId', exercise.changeExerciseStatus)

module.exports = router;
