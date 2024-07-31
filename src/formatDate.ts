export type DateFormat = 'short' | 'medium' | 'long' | 'time';

export function formatDate(date: Date | string | number, format: DateFormat, locale: string = 'en-US'): string {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date');
  }

  const options: Intl.DateTimeFormatOptions = {};

  switch (format) {
    case 'short':
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
      return parsedDate.toLocaleDateString(locale, options);
    case 'medium':
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
      options.weekday = 'short';
      return parsedDate.toLocaleDateString(locale, options);
    case 'long':
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
      options.weekday = 'long';
      return parsedDate.toLocaleDateString(locale, options);
    case 'time':
      options.hour = '2-digit';
      options.minute = '2-digit';
      options.second = '2-digit';
      return parsedDate.toLocaleTimeString(locale, options);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
}
