const { user } = require("../models");
const db = require("../models");
const TrazaHistoricoUsuarios = db.trazaHistoricoUsuario;
exports.getPointsByUserId = async function (req, res) {
  try {
    const { userId } = req.params;
    const Result = await TrazaHistoricoUsuarios.findAll({
      where: { userId: userId },
    });
    res.status(200).json(Result);
  } catch (e) {
    res.status(400).json({ message: "XX - Error fetching all points" });
  }
};

exports.createHistorialPorUsuario = async function (req, res) {
  try {
    const { userId, monthId, puntos } = req.body;
    const Result = await TrazaHistoricoUsuarios.create({
      monthId: monthId,
      userId: userId,
      puntos: puntos,
    });
    return res
      .status(201)
      .json({ mes: Result.monthId, puntos: Result.puntos, id: Result.userId });
  } catch (e) {
    return res.status(400).json({
      meesage: "XX - Error creating new register in traza_historico_usuarios",
    });
  }
};
