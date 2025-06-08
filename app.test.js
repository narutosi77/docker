// app.test.js
const { greet } = require('./app'); // Importa la función a probar

describe('greet function', () => {
  // Prueba para verificar el comportamiento cuando no se proporciona ningún nombre.
  test('should return "¡Hola desde Docker!" when no name is provided', () => {
    expect(greet()).toBe('¡Hola desde Docker!\n');
  });

  // Prueba para verificar el comportamiento cuando se proporciona un nombre.
  // La descripción se ha ajustado para ser más genérica, ya que prueba con múltiples nombres.
  test('should return "¡Hola, [nombre] desde Docker!" when a name is provided', () => {
    expect(greet('Mundo')).toBe('¡Hola, Mundo desde Docker!');
    expect(greet('Alice')).toBe('¡Hola, Alice desde Docker!');
    // Si la función `greet` tiene un comportamiento especial para 'ilyyessy', se podría añadir un test específico para ese caso.
    // expect(greet('ilyyessy')).toBe('¡Hola, ilyyessy desde Docker!\n');
  });

  // Prueba para verificar el comportamiento cuando se proporciona una cadena vacía como nombre.
  test('should handle empty string as name', () => {
    expect(greet('')).toBe('¡Hola desde Docker!\n'); // Se espera el comportamiento por defecto si el nombre es una cadena vacía
  });
});
