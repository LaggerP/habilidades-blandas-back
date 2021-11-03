module.exports = app => {
    const router = require("express").Router();
    const users = require('./users');
    const exercises = require('./exercises');
    const ranking = require('./ranking');
    const categorias = require("./categorias")
    const TrazaUsuarioGrupo = require("./trazaUserGroup")

    router.use('/users', users);
    router.use('/exercises', exercises);
    router.use('/ranking', ranking);
    router.use('/categorias',categorias)
    router.use('/trazaUserGroup',TrazaUsuarioGrupo)

    app.use('/api', router);
};
