module.exports = (sequelize, Sequelize) => {
    const userExercise = sequelize.define("user_exercise", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userAnswer:{
            type: Sequelize.STRING
        },
        note:{
            type: Sequelize.INTEGER
        },
        teacherComment:{
            type: Sequelize.STRING
        },
        state:{
            type: Sequelize.STRING,
            defaultValue: "SIN_HACER"
        }
    });
    return userExercise;
};
