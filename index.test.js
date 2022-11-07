const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles 12-hour loop past 5 - 0:05', () => {
    const timeInWords = convertTimeToWords('0:05');
    expect(timeInWords).toBe('five past twelve');
  });

  it('Handles 11 - 1:11', () => {
    const timeInWords = convertTimeToWords('1:11');
    expect(timeInWords).toBe('eleven past one');
  });

  it('Handles 15 - 2:15', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });

  it('Handles 27 - 9:27', () => {
    const timeInWords = convertTimeToWords('9:27');
    expect(timeInWords).toBe('twenty seven past nine');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles 33 - 12:33', () => {
    const timeInWords = convertTimeToWords('12:33');
    expect(timeInWords).toBe('twenty seven to one');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
});
