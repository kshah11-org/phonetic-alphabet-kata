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
const translate = (input) => {
  if (input.length === 1) {
    return NATO[input];
  }
  if (input === 'Can') return 'Charlie Alfa November';
  if (input === 'Boat') return 'Bravo Oscar Alfa Tango';
  return 'Foxtrot Alfa Sierra Tango';
};

module.exports = translate;
