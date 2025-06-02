// app.test.js
const { greet } = require('./app'); // Importa la función a probar

describe('greet function', () => {
  test('should return "¡Hola desde Docker!" when no name is provided', () => {
    expect(greet()).toBe('¡Hola desde Docker!\n');
  });

  test('should return "¡Hola, [name] desde Docker!" when a name is provided', () => {
    expect(greet('Mundo')).toBe('¡Hola, Mundo desde Docker!\n');
    expect(greet('Alice')).toBe('¡Hola, Alice desde Docker!\n');
  });

  test('should handle empty string as name', () => {
    expect(greet('')).toBe('¡Hola desde Docker!\n'); // Esperamos el comportamiento por defecto si el nombre es cadena vacía
  });
});