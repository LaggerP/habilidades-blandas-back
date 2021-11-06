module.exports = app => {
    const router = require("express").Router();
    const users = require('./users');
    const exercises = require('./exercises');
    const ranking = require('./ranking');
    const categorias = require("./categorias")
    const TrazaUsuarioGrupo = require("./trazaUserGroup")
    const Beneficios = require("./beneficios")
    const TrazaHistoricoUsuario = require("./trazaUserHistorico")
    const Grupos = require("./grupos")

    router.use('/users', users);
    router.use('/exercises', exercises);
    router.use('/ranking', ranking);
    router.use('/categorias',categorias)
    router.use('/trazaUserGroup',TrazaUsuarioGrupo)
    router.use('/beneficios',Beneficios)
    router.use('/historial',TrazaHistoricoUsuario)
    router.use('/grupos',Grupos)

    app.use('/api', router);
};
