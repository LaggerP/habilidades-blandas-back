const router = require("express").Router();
const exercise = require("../controllers/exercise.controller.js");

router.get("/", exercise.getAllExercises);

router.get("/:userId", exercise.getExercisesByUserId);
router.patch("/status/:userExerciseId", exercise.changeExerciseStatus);
router.patch("/answer/:userExerciseId", exercise.changeUserAnswer);
router.patch(
  "/teacher/correction/:userExerciseId",
  exercise.makeTeacherCorrection
);
router.post("/exercise", exercise.createNewExercise);
router.post("/asignar",exercise.asignarleEjercicioUsuario)
router.post("/allActivities",exercise.fetchAllActivities)

module.exports = router;
