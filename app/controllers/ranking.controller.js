const sequelize = require("sequelize");
const { userExercise } = require("../models");

const db = require("../models");
const User = db.user;
const Ranking = db.ranking;
const Exercise = db.exercise;
const UserExcersice = db.userExercise;

exports.getUsersRanking = async (req, res) => {
  try {
    const result = await User.findAll({ order: [["points", "DESC"]] });
    if (result !== null) {
      for (const res of result) {
        delete res.dataValues.password;
      }
      res.status(200).send(result);
    }
    res.status(404).send("Usuario inexistente.");
  } catch (error) {
    res.status(404).send(error.parent.sqlMessage);
  }
};

exports.getRankingGeneral = async (req, res) => {
  try {
    const result = await Exercise.findAll(
      { attributes: ["id", "exerciseCategory"] },
      { group: ["id", "exerciseCategory"] }
    );
    //Me devuelve una lista del id del ejercicio, y la categoria a la que pertenece.
    const resultUserExercises = await userExercise.findAll(
      { attributes: ["note", "state", "exerciseId"] },
      { group: ["userId", "exerciseId"] }
    );
    //Me devuelven todos los ejercicios, los completados y
    let resultMap = getAllCompletadas(resultUserExercises);
    let listaCategorias = getAllPuntosPorCategoria(result, resultMap);

    return res.status(200).json({ message: listaCategorias });
  } catch (e) {
    console.log("XX - Error fetching general Ranking" + e);
  }
};

const getAllCompletadas = (listaEjercicios) => {
  let mapReturn = new Map();
  listaEjercicios.forEach((element) => {
    if (element.state === "COMPLETADA") {
      if (mapReturn.has(element.exerciseId)) {
        //Tiene la categoría, la sumo a lo que tiene normal
        let previousValue = mapReturn.get(element.exerciseId);
        mapReturn.set(element.exerciseId, previousValue + element.note);
        //console.log("XX - Agregó en el if: "+mapReturn)
      } else {
        mapReturn.set(element.exerciseId, element.note);
        //console.log("XX - Agregó en en else: "+mapReturn)
      }
    }
  });
  return mapReturn;
};

const getAllPuntosPorCategoria = (listaCategorias, mapValores) => {
  let translate = new Map();
  listaCategorias.forEach((e) => {
    if (translate.has(e.exerciseCategory)) {
      let value = translate.get(e.exerciseCategory);
      let lista = [value, e.id];
      translate.set(e.exerciseCategory, lista);
    } else {
      translate.set(e.exerciseCategory, e.id);
    }
  });
  let retornoRankings = [];
  for (const [key, value] of translate.entries()) {
    if (!value.length) {
      const objeto = { categoria: key, puntos: mapValores.get(value) };
      retornoRankings.push(objeto);
    } else {
      let objeto = 0;
      value.forEach((e) => {
        objeto += mapValores.get(e);
      });
      const guardaar = { categoria: key, puntos: objeto };
      retornoRankings.push(guardaar);
    }
  }

  return retornoRankings;
};

