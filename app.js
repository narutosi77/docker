// app.js

function greet(name) {
  if (name) {
    return `¡Hola, ${name} desde Docker!`; // Asegúrate de NO incluir '\n' aquí
  }
  return '¡Hola desde Docker!'; // Asegúrate de NO incluir '\n' aquí
}

module.exports = { greet };
