module.exports = (sequelize, Sequelize) => {
    const GroupExercise = sequelize.define("group_exercise", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_exercise: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_group: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });
    return GroupExercise;
};
