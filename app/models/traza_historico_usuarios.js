module.exports = (sequelize, Sequelize) => {
    const TrazaHistoricoUsuarios = sequelize.define("traza_historico_usuarios", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      monthId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      puntos:{
          type: Sequelize.INTEGER,
          allowNull: false
      }
    });
    return TrazaHistoricoUsuarios;
}
  