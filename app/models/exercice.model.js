module.exports = (sequelize, Sequelize) => {
    const Exercise = sequelize.define("exercise", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
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
        },
        uriImg: {
            type: Sequelize.STRING,
        }
    });
    return Exercise;
};
