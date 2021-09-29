const db = require("../models");

const User = db.user;
const Group = db.group;
const UserGroup = db.userGroup;
const Exercise = db.exercise;
const UserExercise = db.userExercise;
const GroupExercise = db.groupExercise;

//UserGroup tiene un User y Group
UserGroup.hasOne(User, {foreignKey: 'id_user'});
UserGroup.hasOne(Group, {foreignKey: 'id_group'});

//UserExercise tiene un User y Exercise
UserExercise.hasOne(User, {foreignKey: 'id_userExercise'});
UserExercise.hasOne(Exercise, {foreignKey: 'id_exerciseUser'});

//GroupExercise tiene un Group y Exercise
GroupExercise.hasOne(Group, {foreignKey: 'id_groupExercise'});
GroupExercise.hasOne(Exercise, {foreignKey: 'id_exerciseGroup'});


