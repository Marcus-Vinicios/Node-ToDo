const {Sequelize} = require('sequelize')

/*
//Troque o os campos abaixo de acordo com os seus respectivos valores.
PS:O nome de usuário padrão geralmente é root, e a senha padrão geralmente é nula ou 'toor',
caso a senha seja nula basta deixar o campo 'senha-usuario' vazio ''
*/
const sequelize = new Sequelize('nome-banco-dados', 'nome-usuario', 'senha-usuario', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conexão efetuada com sucesso!')
} catch (err) {
    console.log('Não foi possivel se conectar: ', err)
}

module.exports = sequelize