const db = require("../models");

const User = db.user;
const Group = db.group;
const Exercise = db.exercise;

User.belongsToMany(Exercise, { through: 'user_exercise' });
Exercise.belongsToMany(User, { through: 'user_exercise' });
User.belongsToMany(Group, { through: 'user_group' });

