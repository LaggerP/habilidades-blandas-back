module.exports = (sequelize, Sequelize) => {
    const Beneficios = sequelize.define("beneficios", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      puntos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nombre:{
          type: Sequelize.STRING,
          allowNull: false
      },
      imagen:{
          type: Sequelize.STRING,
          allowNull: false
      }
    });
    return Beneficios;
  };
  