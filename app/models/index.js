const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DATABASE_URL, {
  dialect: dbConfig.dialect,
  protocol: dbConfig.protocol,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.group = require("./group.model.js")(sequelize, Sequelize);
db.exercise = require("./exercice.model.js")(sequelize, Sequelize);
db.userExercise = require("./userExercise.model.js")(sequelize, Sequelize);
db.ranking = require("./ranking.model.js")(sequelize, Sequelize);
db.categories = require("./category.model.js")(sequelize, Sequelize);
db.groupExercise = require("./groupExercise.model.js")(sequelize, Sequelize);
db.trazaGrupoUsuario = require("./traza_grupos_usuarios.js")(sequelize,Sequelize)
module.exports = db;
