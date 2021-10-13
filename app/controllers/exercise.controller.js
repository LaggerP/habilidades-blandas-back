const db = require("../models");
const Exercise = db.exercise;
const UserExercise = db.userExercise;
const User = db.user;
/*
createExercises = async () => {
    await Exercise.bulkCreate([
        {exerciseDescription: 'Descripción ejercicio 1', exercise: "Consigna ejercicio 1", uriImg:"link1"},
        {exerciseDescription: 'Descripción ejercicio 2', exercise: "Consigna ejercicio 2", uriImg:"link2"},
        {exerciseDescription: 'Descripción ejercicio 3', exercise: "Consigna ejercicio 3", uriImg:"link3"},
    ])
}
createExercises()
  .then(r => console.log("EJERCICIOS CREADOS CON ÉXITO"))
  .catch(e => console.log("OCURRIÓ UN ERROR AL CREAR EJERCICIOS", e));
*/

exports.getExercisesByUserId = async (req, res) => {
    try {
        const result = await User.findOne({
            where: {id: req.params.userId},
            include: Exercise
        });

        if (result !== null) {
            delete result.dataValues.password
            res.status(200).send(result)
        }
        res.status(404).send("No se encontró ningún ejercicio con el usuario proporcionado.")
    } catch (e) {
        res.status(404).send(e.parent.sqlMessage)
    }
};

exports.changeExerciseStatus = async (req, res) => {
    try {
        const result = await UserExercise.update(
          {state: req.body.state},
          {where: {id: req.params.userExerciseId}}
        );
        if (result[0] === 1) {
            res.status(200).send(`Estado del ejercicio ${req.params.userExerciseId} actualizado con éxito.`)
        }
        res.status(404).send("No se encontró ningún ejercicio con el exerciseId proporcionado.")
    } catch (e) {
        res.status(404).send(e.parent.sqlMessage)
    }
};

