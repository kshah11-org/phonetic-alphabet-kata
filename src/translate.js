const NATO = {
  A: 'Alfa',
  B: 'Bravo',
  C: 'Charlie',
  D: 'Delta',
  E: 'Echo',
  F: 'Foxtrot',
  G: 'Golf',
  H: 'Hotel',
  I: 'India',
  J: 'Juliett',
  K: 'Kilo',
  L: 'Lima',
  M: 'Mike',
  N: 'November',
  O: 'Oscar',
  P: 'Papa',
  Q: 'Quebec',
  R: 'Romeo',
  S: 'Sierra',
  T: 'Tango',
  U: 'Uniform',
  V: 'Victor',
  W: 'Whiskey',
  X: 'Xray',
  Y: 'Yankee',
  Z: 'Zulu',
};
const punctuations = [',', '.', '!', '?'];
const translate = (input) => {
  if (input.length === 1) {
    return NATO[input];
  }
  const translation = [];
  [...input].forEach((letter) => {
    if (punctuations.includes(letter)) translation.push(letter);
    else if (letter !== ' ') translation.push(NATO[letter.toUpperCase()]);
  });
  return translation.join(' ');
};

module.exports = translate;
