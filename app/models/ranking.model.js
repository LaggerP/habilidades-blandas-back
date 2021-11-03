module.exports = (sequelize, Sequelize) => {
  const Ranking = sequelize.define("ranking", {
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
    points: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
};
