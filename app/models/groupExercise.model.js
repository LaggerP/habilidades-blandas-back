const { group } = require(".");

module.exports = (sequelize, Sequelize) => {
    const groupExercise = sequelize.define("group_exercise", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        groupAnswer:{
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
            defaultValue: "PENDIENTE"
        }
    });
    return groupExercise;
};