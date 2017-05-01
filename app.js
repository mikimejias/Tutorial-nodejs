const express = require('express');
const app = express();

/*
app.get('/', (req, res) => {
  res.end('Works!');
} );
*/
//probando
app.use(express.static('public'));

app.listen(3000, () =>{
  console.log('Servidor Iniciado');
});
