// app.js
const http = require('http');

// Exportamos esta función para poder probarla
function greet(name) {
  if (name) {
    return `¡Hola, ${name} desde Docker!\n`;
  }
  return '¡Hola desde Docker!\n';
}

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Usamos la función greet aquí
  const urlParams = new URLSearchParams(req.url.split('?')[1]);
  const name = urlParams.get('name');
  res.end(greet(name));
});

// Este bloque asegura que el servidor solo se inicie si el archivo se ejecuta directamente
// (es decir, con `node app.js`), pero no cuando se importa (con `require('./app')`) para las pruebas.
if (require.main === module) {
  server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
  });
}

// También exportamos el servidor para posibles pruebas de integración (aunque no es el foco aquí).
module.exports = { greet, server };