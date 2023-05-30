const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const livereload = require('livereload');
const server = livereload.createServer();

server.watch(__dirname);
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
console.log('Teste servidor');
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
