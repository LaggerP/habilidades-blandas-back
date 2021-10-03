module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "ERROR-1"
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 255],
                    msg: "ERROR-2"
                }
            }
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 255],
                    msg: "ERROR-3"
                }
            }
        },
        phoneNumber: {
            type: Sequelize.STRING,
            unique: true
        },
        points: {
            type: Sequelize.INTEGER
        }
    });
    return User;
};
