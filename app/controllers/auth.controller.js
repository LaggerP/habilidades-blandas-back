const db = require("../models");
const User = db.user;

exports.login = async (req, res) => {
    try {
        const result = await User.findOne({where: {email: req.body.email}});
        if (result !== null && result.dataValues.password === req.body.password) {
            delete result.dataValues.password;
            return res.status(200).send(result);
        } else {
            return res.status(401).json({message: "Error de autenticación"});
        }
    } catch (e) {
        return res.status(400).json({message: e})
    }
};


exports.register = async (req, res) => {
    const {email, password, firstName, lastName, position} = req.body
    try {
        const result = await User.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            position: position,
            uriImgProfile: "http://placekitten.com/200/300",
        });
        if (result !== null) {
            delete result.dataValues.password;
            return res.status(200).send(result);
        } else {
            return res.status(500).send("Error de registro");
        }
    } catch (e) {
        return res.status(400).json({message: e})
    }
};


