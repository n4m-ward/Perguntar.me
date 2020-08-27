const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// para vincular a tabela ao banco de dados usamos

Pergunta.sync({force:false}).then(()=>{
    console.log('tabela criada')
});
module.exports = Pergunta;