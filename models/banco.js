const Sequelize = require("sequelize")
const sequelize = new Sequelize("sistemaweb", "root", "",{
  host:"localhost",
  dialect:"mysql"
})

sequelize.authenticate().then(function(){
  console.log('banco de dados conectado com sucesso')
}).catch(function(erro){
  console.log("falha ao concetar no banco" + erro)
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
