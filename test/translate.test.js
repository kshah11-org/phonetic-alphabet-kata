const translate = require('../src/translate');

describe('Translates the string to the pilots alphabet', () => {
  test('should return Alfa when the input is A', () => {
    expect(translate('A')).toBe('Alfa');
  });
  test('should return Alfa when the input is B', () => {
    expect(translate('B')).toBe('Bravo');
  });
  test('should return "Charlie Alfa November" when the input is Can', () => {
    expect(translate('Can')).toBe('Charlie Alfa November');
  });
});
