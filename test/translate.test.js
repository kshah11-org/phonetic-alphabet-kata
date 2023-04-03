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
  test('should return "Bravo Oscar Alfa Tango" when the input is Boat', () => {
    expect(translate('Boat')).toBe('Bravo Oscar Alfa Tango');
  });
  test('should return "Foxtrot Alfa Sierra Tango" when the input is Fast', () => {
    expect(translate('Fast')).toBe('Foxtrot Alfa Sierra Tango');
  });
  test('should return "Whiskey Oscar Whiskey !" when the input is Wow!', () => {
    expect(translate('Wow!')).toBe('Whiskey Oscar Whiskey !');
  });
});
