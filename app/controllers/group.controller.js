const db = require("../models");
const Grupos = db.group;
const Sequelize = db.sequelize;
const {QueryTypes} = require("sequelize");
const trazaGrupoUsuario = require("../controllers/TrazaGrupoUsuario.controller");

exports.getAllGrupos = async function (req, res) {
    console.log("XX - LLEGO");
    try {
        //const cantIntegrantes = await Sequelize.query();
        const Equipos = await Sequelize.query(
          `select name as nombre, "imagenUri" as fotoEquipo, id
             from "group"
             join (select "groupId"
                   from traza_grupo_usuarios as traza
                   where "userId" = ${req.params.userId}
                   group by "groupId") as temp on temp."groupId" = "group".id`,
          {type: QueryTypes.SELECT}
        );
        const IntegrantesPorEquipo = await Sequelize.query(
          `select "userId", "groupId", points as puntos, concat("firstName", ' ', "lastName") as nombre, "uriImgProfile" as foto
            from traza_grupo_usuarios
            join users u on u.id = traza_grupo_usuarios."userId"`,
          {type: QueryTypes.SELECT}
        );
        Equipos.forEach(element => {
            let lista = [];
            IntegrantesPorEquipo.forEach((integrante) => {
                if (integrante.groupId === element.id) {
                    lista.push(integrante)
                }
            })
            element.integrantes = lista;
            element.cantintegrantes = lista.length
            lista = []
        });
        return res.status(200).json(Equipos);
    } catch (e) {
        console.log(e);
        res.status(400).json({message: "XX - Error fetching all registers"});
    }
};

exports.createGrupo = async function (req, res) {
    try {
        const {name, points, imagenUri} = req.body;
        const Result = await Grupos.create({
            name: name,
            points: points,
            imagenUri: imagenUri,
        });
        res.status(200).json({message: Result});
    } catch (e) {
        res.status(400).json({message: "XX - Error creating new group"});
    }
};
