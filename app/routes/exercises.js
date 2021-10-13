const router = require('express').Router();
const exercise = require('../controllers/exercise.controller.js');

router.get('/:userId', exercise.getExercisesByUserId);
router.patch('/status/:userExerciseId', exercise.changeExerciseStatus);
router.patch('/answer/:userExerciseId', exercise.changeUserAnswer);
router.patch('/teacher/correction/:userExerciseId', exercise.makeTeacherCorrection);

module.exports = router;
