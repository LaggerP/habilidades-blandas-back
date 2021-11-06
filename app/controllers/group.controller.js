const db = require("../models");
const Grupos = db.group;
const trazaGrupoUsuario = require("../controllers/TrazaGrupoUsuario.controller")

exports.getAllGrupos = async function (req, res) {
  try {
    const result = await Grupos.findAll({
      attributes: ["id","name", "points", "imagenUri"],
    });
    const cantIntegrantes = await trazaGrupoUsuario.countUsers(result[0].id);
    const integrantes = await trazaGrupoUsuario.countUsers(result[0].id);
    return res.status(200).json({result:result,cant:cantIntegrantes,personas:integrantes});
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "XX - Error fetching all registers" });
  }
};

exports.createGrupo = async function (req, res) {
  try {
    const { name, points, imagenUri } = req.body;
    const Result = await Grupos.create({
      name: name,
      points: points,
      imagenUri: imagenUri,
    });
    res.status(200).json({ message: Result });
  } catch (e) {
    res.status(400).json({ message: "XX - Error creating new group" });
  }
};
