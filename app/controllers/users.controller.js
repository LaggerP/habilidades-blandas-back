const db = require("../models");
const User = db.user;
const Exercise = db.exercise;

createUser = async () => {
  await User.bulkCreate([
    {
      email: "email@email.com",
      password: "password1",
      firstName: "John",
      lastName: "Doe",
      position: "Developer",
      uriImgProfile: "http://placekitten.com/200/300",
    },
    {
      email: "Felipe.Viccenzo@email.com",
      password: "password2",
      firstName: "Felipe",
      lastName: "Viccenzo",
      position: "Associate Software Engineer",
      uriImgProfile: "http://placekitten.com/200/300",
    },
  ]);
};
//createUser()
//.then((r) => console.log("USUARIO CREADO CON ÉXITO"))
//.catch((e) => console.log("OCURRIÓ UN ERROR AL CREAR EL USUARIO"));

exports.getUserDataByUserId = async (req, res) => {
  try {
    const result = await User.findOne({
      where: { id: req.params.userId },
      include: [
        {
          model: Exercise,
          required: false,
        },
      ],
    });

    if (result !== null) {
      delete result.dataValues.password;
      res.status(200).send(result);
    }
    res.status(404).send("Usuario inexistente.");
  } catch (error) {
    res.status(404).send(error.parent.sqlMessage);
  }
};
exports.registerUser = async function (req, res) {
  const {
    email,
    password,
    firstName,
    lastName,
    position,
    points,
    uriImgProfile,
  } = req.body;

  const User = {
    email,
    password,
    firstName,
    lastName,
    position,
    points,
    uriImgProfile,
  };

  try {
    // Calling the Service function with the new object from the Request Body
    var createdUser = await createUser(User);
    return res
      .status(201)
      .json({ user: createdUser, message: "Succesfully Created User" });
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    console.log(e);
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createUser = async function (user) {
  try {
    var savedUser = await registerUser(user);
    console.log("El usuario se guardó correctamente");
    return savedUser;
  } catch (e) {
    console.log(e);
    throw Error(e.message);
  }
};

exports.registerUser = async function (user) {
  try {
    var newUser = await User.create(user);
    return newUser;
  } catch (e) {
    throw Error("Error while creating user");
  }
};
