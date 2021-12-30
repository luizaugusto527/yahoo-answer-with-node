const Sequelize = require('sequelize')
const connection = require('./database')

const Pergunta = connection.define('pergunta',{
    titulo:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})

Pergunta.sync({force:false})

// sync sincroniza a tabela com o banco e cria a tabela caso ela não exista
// force = false não força a criação da tabela caso a tabela já exista
