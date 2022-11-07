// expecting time to be a string in the format like '8:15' or '12:30'
const INDEX_OFFSET = 1;
const MAX_HOUR = 12;
const MAX_MIN = 60;

const NUMBER_IN_WORDS = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine'
];

function getHourInWords(hour) {
  return NUMBER_IN_WORDS[hour % MAX_HOUR];
}

function getMinInWords(min) {
  if (min === 15 || min === 45) {
    return 'quarter';
  }
  if (min === 30) {
    return 'half';
  }
  if (min > 30) {
    return NUMBER_IN_WORDS[MAX_MIN - min - INDEX_OFFSET];
  }
  return NUMBER_IN_WORDS[min - INDEX_OFFSET];
}

function timeFormat(min, hour) {
  const hourInWords =
    min > 30
      ? getHourInWords(hour)
      : getHourInWords(hour + MAX_HOUR - INDEX_OFFSET);
  const minInWords = getMinInWords(min);

  if (min === 0) {
    return `${hourInWords} o'clock`;
  }
  if (min <= 30) {
    return `${minInWords} past ${hourInWords}`;
  }
  return `${minInWords} to ${hourInWords}`;
}

function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }
  const parseNumber = (numString) => Number.parseInt(numString, 10);
  const [hour, min] = time.split(':').map(parseNumber);

  return timeFormat(min, hour);
}

module.exports = { convertTimeToWords };
