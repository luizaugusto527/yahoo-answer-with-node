const express = require('express')
const app = express();

app.set('view engine','ejs')
app.use(express.static('public'))


app.get("/:nome/:lang", (req,res) => {
    let nome = req.params.nome
    let lang = req.params.lang
    let exibirMsg = true;
    let produtos = [
        {nome:'Doritos',preco:3.14},
        {nome:'coca',preco:5},
        {nome:'Leite',preco:1.45},
    ]
    res.render("index",{
        nome:nome,
        lang:lang,
        msg:exibirMsg,
        produtos:produtos
    })
})

app.listen(8081, () => {
    console.log("Servidor rodando");
})