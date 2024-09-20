/*cria um servidor web simples utilizando o framework Express.js no Node.js*/
const express = require('express')
const app = express()

app.listen(8081, function(){
  console.log("servidor ativo!")
})

app.get("/", function(req, res){
  console.log("Página Principal")
  res.send("Página principal")
})

app.get("/contato", function(req, res){
  console.log("Pagina de contato")
  res.send("Pagina de contato")
})