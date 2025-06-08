
const { greet } = require('./app'); 

describe('greet function', () => {
  
  test('should return "¡Hola desde Docker!" when no name is provided', () => {
    
    expect(greet()).toBe('¡Hola desde Docker!');
  });

  test('should return "¡Hola, [nombre] desde Docker!" when a name is provided', () => {
    
    expect(greet('Mundo')).toBe('¡Hola, Mundo desde Docker!');
    expect(greet('Alice')).toBe('¡Hola, Alice desde Docker!');
  });

  test('should handle empty string as name', () => {
    
    expect(greet('')).toBe('¡Hola desde Docker!');
  });
});
