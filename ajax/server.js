const bodyParser = require('body-parser');
const express = require('express');
const app = express();

let port = 3000;
app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));//ler dados vindos do html
app.use(bodyParser.json());//conversor json em objeto JavaScript

app.get('/teste',(req, res)=> res.send('Ok'));
app.listen(port, ()=> console.log('Servidor Iniciado escutando porta '+port));