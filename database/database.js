const Sequelize = require('sequelize');
const connection = new Sequelize('heroku_47a5ae6fdbd1e5b','/b6cd6ff4c8233a','9b384363',{
    host: 'us-cdbr-east-03.cleardb.com',
    dialect: 'mysql'
});
module.exports = connection;