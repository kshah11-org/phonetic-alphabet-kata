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
  test('should return "India Whiskey India Lima Lima" when the input is I will', () => {
    expect(translate('I will')).toBe('India Whiskey India Lima Lima');
  });
  test('should return "India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?" when the input is If, you can read?', () => {
    expect(translate('If, you can read?')).toBe(
      'India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?',
    );
  });
});
