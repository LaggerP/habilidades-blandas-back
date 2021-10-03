module.exports = (sequelize, Sequelize) => {
    const Exercise = sequelize.define("exercise", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        exerciseDescription: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        exercise: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    });
    return Exercise;
};
