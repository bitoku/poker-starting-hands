export const SUITS = ['S', 'H', 'D', 'C'];
export const RANKS: number[] = Array.from(Array(13), (v, k) => k + 1);
export const STARTING_HAND_RANKS: {[s: string]: number} = {
  'AA': 1,
  'AKo': 2,
  'AQo': 3,
  'AJo': 4,
  'ATo': 6,
  'A9o': 8,

  'AKs': 1,
  'AQs': 2,
  'AJs': 2,
  'ATs': 3,
  'A9s': 5,
  'A8s': 5,
  'A7s': 5,
  'A6s': 5,
  'A5s': 5,
  'A4s': 5,
  'A3s': 5,
  'A2s': 5,

  'KK': 1,
  'KQo': 4,
  'KJo': 5,
  'KTo': 6,
  'K9o': 8,

  'KQs': 2,
  'KJs': 3,
  'KTs': 4,
  'K9s': 7,
  'K8s': 7,
  'K7s': 7,
  'K6s': 7,
  'K5s': 7,
  'K4s': 7,
  'K3s': 7,
  'K2s': 7,

  'QQ': 1,
  'QJo': 5,
  'QTo': 6,
  'Q9o': 8,

  'QJs': 3,
  'QTs': 4,
  'Q9s': 5,
  'Q8s': 7,

  'JJ': 1,
  'JTo': 5,
  'J9o': 7,
  'J8o': 8,

  'JTs': 3,
  'J9s': 4,
  'J8s': 6,
  'J7s': 8,

  'TT': 2,
  'T9o': 7,
  'T8o': 8,

  'T9s': 4,
  'T8s': 5,
  'T7s': 7,

  '99': 3,
  '98o': 7,

  '98s': 4,
  '97s': 5,
  '96s': 8,

  '88': 4,
  '87o': 8,
  '87s': 5,
  '86s': 6,
  '85s': 8,

  '77': 5,
  '76o': 8,
  '76s': 5,
  '75s': 6,
  '74s': 8,

  '66': 5,
  '65o': 8,
  '65s': 6,
  '64s': 7,

  '55': 6,
  '54o': 8,
  '54s': 6,
  '53s': 7,

  '44': 7,
  '43s': 7,
  '42s': 8,

  '33': 7,
  '32s': 8,

  '22': 7,
};