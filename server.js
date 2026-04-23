// server.js - Punto de entrada para Render
const http = require('http');
const { sumar, saludo } = require('./app');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (req.url === '/sumar') {
    const resultado = sumar(3, 7);
    res.end(JSON.stringify({ operacion: '3 + 7', resultado }));
  } else {
    res.end(JSON.stringify({ mensaje: saludo() }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});