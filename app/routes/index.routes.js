module.exports = app => {
    const router = require("express").Router();
    const users = require('./users');

    router.use('/users', users);

    app.use('/api', router);
};
