/*biblioteca Sequelize para conectar a um banco de dados MySQL.*/

const Sequelize = require("sequelize");
const sequelize = new Sequelize("exemplo_crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate().then(function(){ //tenta conectar com o banco e abaixo tem funçãonde callback pra cada cenario
  console.log("Banco de dados conectado com sucesso!")
}).catch(function(erro){
  console.log("Falha ao conectar no banco "+erro)
})

const agendamentos = sequelize.define("agendamentos", {
  nome:{
    type: Sequelize.STRING
  },
  endereco:{
    type: Sequelize.STRING
  },
  bairro:{
    type: Sequelize.STRING
  },
  cep:{
    type: Sequelize.STRING
  },
  cidade:{
    type: Sequelize.STRING
  },
  estado:{
    type: Sequelize.STRING
  },
  observacao:{
    type: Sequelize.STRING
  }
})

//agendamentos.sync({force: true})

module.exports = agendamentos