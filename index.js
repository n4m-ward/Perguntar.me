const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
//database
connection.authenticate()
.then(()=>{
console.log('conexao feita com o banco de dados');
})
.catch((msgErro)=>{
    console.log(msgErro);
})


//estou dizendo pro express para usar o 'ejs
app.set('view engine','ejs');
app.use(express.static('public'));
//body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rotas
app.get('/',(req,res) =>{
    Pergunta.findAll({raw:true}).then(perguntas =>{
        res.render('index',{
            perguntas:perguntas

        });
    });


    
});
app.get('/perguntar',(req,res)=>{
    res.render('perguntar');
});
app.post('/salvarPergunta',(req,res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo:titulo,
        descricao:descricao
    }).then(()=>{
        res.redirect('/');
    });
});
app.get('/pergunta/:id',(req,res)=>{
    var id = req.params.id;
    Pergunta.findOne({
        where:{id:id}
    }).then(pergunta =>{
        if(pergunta != undefined){// pergunta encontrada
            res.render('pergunta')
        }else{// não encontrada
            res.redirect('/')
        }
    })
})



app.listen(8080,()=>{
    console.log('app rodando!')});