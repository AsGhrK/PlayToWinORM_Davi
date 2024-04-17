const db = require("../db/conn");
const {DataTypes} = require("sequelize")

const Jogo = db.define("Jogo",{
    id:{
        type: DataTypes.NUMBER,
        required:true,
    },
    titulo:{
        type: DataTypes.STRING,
        required:true,
    },
    descricao:{
        type: DataTypes.STRING,
        required:true,
    },
    procoBase:{
        type: DataTypes.NUMBER,
        required:true,
    }
})

module.exports = Jogo;