const Sequelize = require('sequelize')
const connection = new Sequelize('yahoorespostas','root','password',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = connection