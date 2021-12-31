const Sequileze = require('sequelize')
const connection = require('./database')

const Resposta = connection.define('resposta',{
    corpo:{
        type:Sequileze.TEXT
    },
    perguntaId:{
        type:Sequileze.INTEGER,
        allowNull:false
    }
})
Resposta.sync({force:false})

module.exports = Resposta