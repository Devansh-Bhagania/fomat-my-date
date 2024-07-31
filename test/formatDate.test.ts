import { formatDate } from '../src/formatDate';

describe('formatDate', () => {
  it('formats date in short style', () => {
    const date = new Date(2021, 11, 31);
    expect(formatDate(date, 'short')).toBe('Dec 31, 2021');
  });

  it('formats date in medium style', () => {
    const date = new Date(2021, 11, 31);
    expect(formatDate(date, 'medium')).toBe('Fri, Dec 31, 2021');
  });

  it('formats date in long style', () => {
    const date = new Date(2021, 11, 31);
    expect(formatDate(date, 'long')).toBe('Friday, December 31, 2021');
  });

  it('formats time', () => {
    const date = new Date(2021, 11, 31, 0, 0, 0);
    expect(formatDate(date, 'time')).toBe('12:00:00 AM');
  });

  it('formats date in French locale', () => {
    const date = new Date(2021, 11, 31);
    expect(formatDate(date, 'short', 'fr-FR')).toBe('31 déc. 2021');
  });

  it('formats date in short style with different time zones', () => {
    const date = new Date('2021-12-31T00:00:00Z');
    expect(formatDate(date, 'short', 'en-US')).toBe('Dec 31, 2021');
    expect(formatDate(date, 'short', 'en-GB')).toBe('31 Dec 2021');
  });

  it('handles invalid date input', () => {
    expect(() => formatDate('invalid-date', 'short')).toThrow(Error);
  });

  it('formats edge date: epoch time', () => {
    const date = new Date(0);
    expect(formatDate(date, 'short')).toBe('Jan 1, 1970');
  });

  it('formats edge date: leap year', () => {
    const date = new Date(2020, 1, 29); // February 29, 2020 (leap year)
    expect(formatDate(date, 'short')).toBe('Feb 29, 2020');
  });

  it('formats date with custom locale and different formats', () => {
    const date = new Date(2021, 11, 31);
    expect(formatDate(date, 'medium', 'de-DE')).toBe('Fr., 31. Dez. 2021');
    expect(formatDate(date, 'long', 'ja-JP')).toBe('2021年12月31日金曜日');
    expect(formatDate(date, 'time', 'fr-FR')).toBe('00:00:00');
  });
});
