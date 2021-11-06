const db = require("../models");
const Beneficios = db.beneficios;

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

module.exports = {
  getAllBeneficios,
  postBeneficios,
};
