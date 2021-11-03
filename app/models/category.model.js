module.exports = (sequelize, Sequelize) => {
  const Categorias = sequelize.define("categorias", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });
  return Categorias;
};
