module.exports = app => {
    const router = require("express").Router();
    const users = require('./users');
    const exercises = require('./exercises');
    const ranking = require('./ranking');
    const categories = require("./categories")
    const TrazaUsuarioGrupo = require("./trazaUserGroup")
    const auth = require("./auth")

    router.use('/users', users);
    router.use('/exercises', exercises);
    router.use('/ranking', ranking);
    router.use('/categories', categories)
    router.use('/trazaUserGroup', TrazaUsuarioGrupo)
    router.use('/auth', auth)

    app.use('/api', router);
};
