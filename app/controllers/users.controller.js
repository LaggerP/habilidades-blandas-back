const db = require("../models");
const User = db.user;

/* DESCOMENTAR UNA VEZ QUE SE CREARON LAS TABLAS PARA PODER CREAR ESTE USUARIO DUMMY

createUser = async () => {
    await User.bulkCreate([
        {
            email: 'email@email.com',
            password: "password1",
            firstName:"John",
            lastName:"Doe"
        }
    ])
}
createUser()
  .then(r => console.log("USUARIO CREADO CON ÉXITO"))
  .catch(e => console.log("OCURRIÓ UN ERROR AL CREAR EL USUARIO"));

*/
