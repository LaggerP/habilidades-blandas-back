module.exports = app => {
    const router = require("express").Router();
    const users = require('./users');
    const exercises = require('./exercises');

    router.use('/users', users);
    router.use('/exercises', exercises);

    app.use('/api', router);
};
