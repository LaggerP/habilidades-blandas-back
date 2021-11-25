const db = require("../models");
const Exercise = db.exercise;
const UserExercise = db.userExercise;
const Categorias = db.categories;
const User = db.user;

createExercises = async () => {
  await Exercise.bulkCreate([
    {
      title: "Titulo ejercicio 1",
      exerciseDescription: "Descripción ejercicio 1",
      exercise: "Consigna ejercicio 1",
      uriImg:
        "http://2.bp.blogspot.com/-1ERbtbziGZc/Uk0i8sN6yrI/AAAAAAAAAhc/Rns8zRUPYA0/s1600/551351_134849146705388_1524579026_n.jpg",
    },
    {
      title: "Titulo ejercicio 2",
      exerciseDescription: "Descripción ejercicio 2",
      exercise: "Consigna ejercicio 2",
      uriImg:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/7ccc5f11345327.560317912b118.jpg",
    },
    {
      title: "Titulo ejercicio 3",
      exerciseDescription: "Descripción ejercicio 3",
      exercise: "Consigna ejercicio 3",
      uriImg:
        "https://lh3.googleusercontent.com/proxy/az9kiBCnBU7O2OLLcBVoz3robJOXCC7izIomaKWhe34J6ewruoOKXf26Gdgjd-Cr04U45RXzL0JcAPMdIo8z6OEEWtD7JSmUw94tYvXMO5Z421WoOQFqkGQ5",
    },
  ]);
};
//createExercises()
//.then((r) => console.log("EJERCICIOS CREADOS CON ÉXITO"))
//.catch((e) => console.log("OCURRIÓ UN ERROR AL CREAR EJERCICIOS", e));

/**
 * Obtiene todos los ejercicios de un usuario a partir de su UserId.
 * @param req
 * @param res
 */
exports.getExercisesByUserId = async (req, res) => {
  try {
    const result = await User.findOne({
      where: { id: req.params.userId },
      include: Exercise,
    });

    if (result.exercises.length > 0) {
      res.status(200).send(result.exercises);
    }
    res
      .status(404)
      .send("No se encontró ningún ejercicio con el usuario proporcionado.");
  } catch (e) {
    res.status(404).send(e.parent.sqlMessage);
  }
};

/**
 * Actualiza el estado de un ejercicio a partir del userExerciseId.
 * @param req
 * @param res
 */
exports.changeExerciseStatus = async (req, res) => {
  try {
    const result = await UserExercise.update(
      { state: req.body.state },
      { where: { id: req.params.userExerciseId } }
    );
    if (result[0] === 1) {
      res
        .status(200)
        .send(
          `Estado del ejercicio ${req.params.userExerciseId} actualizado con éxito.`
        );
    }
    res
      .status(404)
      .send("No se encontró ningún ejercicio con el exerciseId proporcionado.");
  } catch (e) {
    res.status(404).send(e.parent.sqlMessage);
  }
};

/**
 * Actualiza la respuesta de un ejercicio a partir del userExerciseId.
 * @param req
 * @param res
 */
exports.changeUserAnswer = async (req, res) => {
  try {
    const result = await UserExercise.update(
      { userAnswer: req.body.answer },
      { where: { id: req.params.userExerciseId } }
    );
    if (result[0] === 1) {
      res
        .status(200)
        .send(
          `Respuesta del ejercicio ${req.params.userExerciseId} actualizado con éxito.`
        );
    }
    res
      .status(404)
      .send("No se encontró ningún ejercicio con el exerciseId proporcionado.");
  } catch (e) {
    res.status(404).send(e.parent.sqlMessage);
  }
};

/**
 * Actualiza la corrección de un ejercicio a partir del userExerciseId.
 * @param req
 * @param res
 */
exports.makeTeacherCorrection = async (req, res) => {
  try {
    const result = await UserExercise.update(
      {
        note: req.body.note,
        teacherComment: req.body.teacherComment,
        state: "CORREGIDA",
      },
      { where: { id: req.params.userExerciseId } }
    );

    const userId = (
      await UserExercise.findOne({ where: { id: req.params.userExerciseId } })
    ).dataValues.userId;
    const userData = await User.findOne({ where: { id: userId } });

    const pointsResult = await User.update(
      {
        points: userData.dataValues.points + req.body.note * 10,
      },
      { where: { id: userId } }
    );

    if (result[0] === 1 && pointsResult[0] === 1) {
      res
        .status(200)
        .send(
          `Corrección del ejercicio ${req.params.userExerciseId} actualizado con éxito.`
        );
    }
    res
      .status(404)
      .send("No se encontró ningún ejercicio con el exerciseId proporcionado.");
  } catch (e) {
    res.status(404).send(e.parent.sqlMessage);
  }
  res
    .status(404)
    .send("No se encontró ningún ejercicio con el exerciseId proporcionado.");
};

exports.createNewExercise = async (req, res) => {
  try {
    const { title, exerciseDescription, exercise, uriImg, exerciseCategory } =
      req.body;
      //ExerciseCategory me llega un numero desde el front, por eso no funciona, por eso agregué la compración del id
    const validate = await Categorias.findAll({
      order: [["name", "DESC"]],
    });
    let validation = false;
    validate.forEach((e) => {
      console.log(e.id)
      if (e.name === exerciseCategory || e.id == exerciseCategory) {
        console.log("XX - Existe la validacion");
        validation = true;
      }
    });
    if (!validation) {
      return res
        .status(400)
        .json({ message: "XX - You cant use a category which doesnt exist" });
    }
    const createdObject = await Exercise.create({
      title: title,
      exerciseDescription: exerciseDescription,
      exercise: exercise,
      uriImg: uriImg,
      exerciseCategory: exerciseCategory,
    });
    return res.status(201).json({ createdObject });
  } catch (e) {
    console.log(e);
    return res
      .status(400)
      .json({ messsage: "XX - You cant create a new exercise" });
  }
};

exports.asignarleEjercicioUsuario = async (req, res) => {
  try {
    const { userId, exerciseId } = req.body;
    const guardarAsignacion = await UserExercise.create({
      userId: userId,
      exerciseId: exerciseId,
    });
    return res.status(201).json({ message: guardarAsignacion });
  } catch (e) {
    console.log(e);
    return res
      .status(400)
      .json({ message: "XX - Error asignado ejercicio a usuario, " + e });
  }
};

exports.fetchAllActivities = async (req, res) => {
  try {
    const result = await UserExercise.findAll();
    return res.status(200).json({ message: result });
  } catch (e) {
    return res
      .status(400)
      .json({ message: "XX - You cant perform this action" });
  }
};
