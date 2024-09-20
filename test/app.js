/*cria um servidor HTTP simples que escuta na porta 8081*/ 
var http = require('http')

http.createServer(function(req, res){
  res.end("mensagem direcionada")
}).listen(8081) //inicia o servidos HTTP 

console.log("servidor está ativo")