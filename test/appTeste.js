/*O código fornecido configura um servidor web simples utilizando o Express.js e o motor de templates Handlebars.*/
const express = require("express")
const app = express()
const agendamentos = require("./bancoTeste")

app.listen(8081, function(){
  console.log("Servidor ativo!")
})

app.get("/", function(req, res){
  res.send("pagina principal")
})

app.get("/Cadastrar", function(req, res){//vai registrar o nome Nicolas yanase no bando de dados "exemplo crud" na tabela agendamentos
  agendamentos.create({
    nome: "Nicolas Yanase"
  })
  res.send("Registro inserido com sucesso")
})

