module.exports = app => {
    const router = require("express").Router();
    const users = require('./users');
    const exercises = require('./exercises');
    const ranking = require('./ranking');

    router.use('/users', users);
    router.use('/exercises', exercises);
    router.use('/ranking', ranking);

    app.use('/api', router);
};
