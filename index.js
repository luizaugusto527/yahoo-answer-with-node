const express = require('express')
const app = express();

const connection = require("./data/database")
const Pergunta = require('./data/Pergunta')
const Resposta = require('./data/Resposta')

connection.authenticate().then(()=>{
    console.log("conexão feita com sucesso")
}).catch((err)=>console.log(err))

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res) => {
    Pergunta.findAll({raw:true,order:[['id','DESC']]}).then(perguntas =>{
        res.render("index",{
            perguntas:perguntas
        }) 
        
    })

})

app.get("/perguntar",(req,res)=>{
    res.render("perguntar")
})

app.post('/salvarpergunta',(req,res)=>{
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    // INSERT INTO
    Pergunta.create({
        titulo:titulo,
        descricao:descricao
    }).then(()=>{
        res.redirect("/");
    })
})
app.get('/pergunta/:id',(req,res)=>{
    let id = req.params.id
    Pergunta.findOne({
        where:{id:id}
    }).then(pergunta =>{
        if(pergunta != undefined){

            Resposta.findAll({
                where:{perguntaId:pergunta.id}
            }).then(respostas =>{
                res.render('pergunta',{
                    pergunta:pergunta,
                    respostas:respostas
                })
            })
        }else{
            res.redirect('/')
        }
    })
})


app.post("/responder",(req,res)=>{
  let corpo = req.body.corpo
  let perguntaId = req.body.pergunta
  Resposta.create({
      corpo:corpo,
      perguntaId:perguntaId
  }).then(()=>{
      res.redirect("/pergunta/" + perguntaId)
  }) 
})


app.listen(8081, () => {
    console.log("Servidor rodando");
})