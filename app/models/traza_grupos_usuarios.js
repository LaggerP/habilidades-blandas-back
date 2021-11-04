module.exports = (sequelize, Sequelize) => {
    const TrazaUsuarioGrupo = sequelize.define("traza_grupo_usuarios", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        isActive:{
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });
    return TrazaUsuarioGrupo;
};
