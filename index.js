const express = require('express')
const app = express();
const connection = require("./data/database")
const perguntaModel = require('./data/Pergunta')

connection.authenticate().then(()=>{
    console.log("conecxão feita com sucesso")
}).catch((err)=>console.log(err))

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))

app.get("/", (req,res) => {
    res.render("index") 
})

app.get("/perguntar",(req,res)=>{
    res.render("perguntar")
})

app.post('/salvarpergunta',(req,res)=>{
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    res.send(`${titulo} - ${descricao}`)
})

app.listen(8081, () => {
    console.log("Servidor rodando");
})