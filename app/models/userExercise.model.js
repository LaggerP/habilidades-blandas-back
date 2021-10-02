module.exports = (sequelize, Sequelize) => {
    const userExercise = sequelize.define("user_exercise", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_exercise: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_user: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        note:{
            type: Sequelize.INTEGER
        },
        teacherComment:{
            type: Sequelize.STRING
        }
    });
    return userExercise;
};
