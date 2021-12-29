const Sequelize = require('sequelize')
const connection = new Sequelize('yahoorespostas','root','suasenhaaqui',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = co