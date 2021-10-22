const sequelize = require("sequelize");

const db = require("../models");
const User = db.user;

exports.getUsersRanking = async (req, res) => {
    try {
        const result = await User.findAll({order: [['points', 'DESC']]});
        if (result !== null) {
            for (const res of result) {
                delete res.dataValues.password
            }
            res.status(200).send(result)
        }
        res.status(404).send("Usuario inexistente.");
    } catch (error) {
        res.status(404).send(error.parent.sqlMessage)
    }
};
