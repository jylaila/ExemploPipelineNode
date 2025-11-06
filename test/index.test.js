const soma = require('../src/index');

describe('Função soma', () => {
  test('soma 2 + 3 = 5', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('soma números negativos', () => {
    expect(soma(-1, -1)).toBe(-2);
  });
});


