module.exports = app => {
    const router = require("express").Router();
    const users = require('./users');
    const exercises = require('./exercises');
    const ranking = require('./ranking');
    const categories = require("./categories")
    const TrazaUsuarioGrupo = require("./trazaUserGroup")
    const Beneficios = require("./beneficios")
    const TrazaHistoricoUsuario = require("./trazaUserHistorico")
    const Grupos = require("./grupos")
    const auth = require("./auth")

    router.use('/users', users);
    router.use('/exercises', exercises);
    router.use('/ranking', ranking);
    router.use('/trazaUserGroup',TrazaUsuarioGrupo)
    router.use('/beneficios',Beneficios)
    router.use('/historial',TrazaHistoricoUsuario)
    router.use('/grupos',Grupos)
    router.use('/categories', categories)
    router.use('/auth', auth)

    app.use('/api', router);
};
