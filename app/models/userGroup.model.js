module.exports = (sequelize, Sequelize) => {
    const UserGroup = sequelize.define("user_group", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_user: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_group: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });
    return UserGroup;
};
