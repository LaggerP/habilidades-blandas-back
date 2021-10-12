const db = require("../models");
const User = db.user;
const Exercise = db.exercise;

createUser = async () => {
    await User.bulkCreate([
        {email: 'email@email.com', password: "password1", firstName: "John", lastName: "Doe", position: "Developer", uriImgProfile: "http://placekitten.com/200/300"},
        {email: 'Felipe.Viccenzo@email.com', password: "password2", firstName: "Felipe", lastName: "Viccenzo", position: "Associate Software Engineer", uriImgProfile: "http://placekitten.com/200/300"},
    ])
}
createUser()
    .then(r => console.log("USUARIO CREADO CON ÉXITO"))
    .catch(e => console.log("OCURRIÓ UN ERROR AL CREAR EL USUARIO"));

exports.getUserDataByUserId = async (req, res) => {
    try {
        const result = await User.findOne({
            where: { id: req.params.userId },
            include: [{
                model: Exercise,
                required: false
            }]
        });

        if (result !== null) {
            delete result.dataValues.password
            res.status(200).send(result)
        };
        res.status(404).send("Usuario inexistente.");

    } catch (error) {
        res.status(404).send(error.parent.sqlMessage)
    }
};