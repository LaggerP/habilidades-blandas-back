const db = require("../models");
const Categoria = db.categorias;

const getAllCategorias = async (req, res) => {
  try {
    const result = await Categoria.findAll({ order: [["name", "DESC"]] });
    return res.status(200).json({ message: result });
  } catch (e) {
    console.log("XX - Error fetchiong all categories");
    return res.status(400).json({message: "XX - You cant fetch all the categories"})
  }
};

const postCategory = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name)
    const create = await Categoria.create({name:name});
    return res.status(201).json({ message: create });
  } catch (e) {
    console.log("XX - Error posting category");
    return res.status(400).json({message: "XX - You cant perform the requested action."})
  }
};

module.exports = {
  getAllCategorias,
  postCategory,
};
