const db = require("../models");
const Beneficios = db.beneficios;
const User = db.user;

const getAllBeneficios = async (req, res) => {
  try {
    const result = await Beneficios.findAll({ order: [["puntos", "DESC"]] });
    return res.status(200).json(result);
  } catch (e) {
    console.log("XX - Error fetchiong all categories");
    return res
      .status(400)
      .json({ message: "XX - You cant fetch all the categories" });
  }
};

const postBeneficios = async (req, res) => {
  try {
    const { nombre, puntos, imagen } = req.body;
    console.log("XX - Creando beneficio");
    const create = await Beneficios.create({
      nombre: nombre,
      puntos: puntos,
      imagen: imagen,
    });
    return res.status(201).json({ message: create });
  } catch (e) {
    console.log("XX - Error posting category");
    return res
      .status(400)
      .json({ message: "XX - You cant perform the requested action." });
  }
};

const changePoints = async (req, res) => {
  try {
    const pointsResult = await User.update(
          {
              points: (req.body.points)
          },
          {where: {id:req.params.userId}}
        );
        if ( pointsResult[0] === 1) {
          res
            .status(200)
            .send(
              `Exito en cambiando los puntos del usuario ${req.params.userId}`
            );
        } 
  } catch (e) {
    console.log("Error en cambiando puntos");
    return res
      .status(400)
      .json({message: "Accion invalida."});
  }
};

module.exports = {
  getAllBeneficios,
  postBeneficios,
  changePoints,
};
