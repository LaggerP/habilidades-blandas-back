const db = require("../models");

const TrazaGrupoUsuario = db.trazaGrupoUsuario;

exports.createTrazaUserGroup = async (req, res) => {
  try {
    const { userId, groupId } = req.body;
    const guardarRegistro = await TrazaGrupoUsuario.create({
      isActive: true,
      userId: userId,
      groupId: groupId,
    });
    return res.status(201).json({ message: guardarRegistro });
  } catch (e) {
    console.log("XX - Error creating new row" + e);
    return res.status(400).json({ message: "XX - Error inserting row" });
  }
};

exports.getTrazaUserGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const guardarRegistro = await TrazaGrupoUsuario.findAll({
      where: { groupId: groupId },
    });
    return res.status(201).json({ message: guardarRegistro });
  } catch (e) {
    console.log("XX - Error creating new row");
  }
};

exports.getCountTrazaUserGroup = async (req, res) => {
  var guardarRegistro;
  try {
    const { groupId } = req.params;
    guardarRegistro = await countUsers(groupId);
    return res.status(201).json({ count: guardarRegistro.length });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: "XX - Error fetching count" });
  }
};

exports.countUsers = async function(groupId){
  console.log("XX - Group id "+groupId)
  var result = await TrazaGrupoUsuario.findAll({
    where: { groupId: groupId },
  });
  return result;
};