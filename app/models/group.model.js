module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define("group", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 255],
                    msg: "ERROR-2"
                }
            }
        },
        points: {
            type: Sequelize.INTEGER
        }
    });
    return Group;
};
