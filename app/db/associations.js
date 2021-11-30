const db = require("../models");

const User = db.user;
const Group = db.group;
const Exercise = db.exercise;
const GroupExercise = db.groupExercise;
const TrazaGrupoUsuario = db.trazaGrupoUsuario


const UserExercise = db.userExercise;

Exercise.belongsToMany(UserExercise, {through: "exercise_user_exercise"});
UserExercise.belongsTo(Exercise, {through: "exercise_user_exercise"});

User.belongsToMany(Exercise, { through: "user_exercise" });
Exercise.belongsToMany(User, { through: "user_exercise" });
User.belongsToMany(Group, { through: "user_group" });

Exercise.belongsToMany(GroupExercise, { through: "group_exercise" });
User.belongsToMany(Group,{through:"traza_grupo_usuarios"})
Group.belongsToMany(User, {through:"traza_grupo_usuarios"}) 
