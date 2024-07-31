# format-my-date

`format-my-date` is a lightweight and flexible library for formatting dates in various styles and locales. It provides a simple interface for formatting dates and times, with support for internationalization.

## Installation

To install the format-my-date package, simply run the following command:

```
npm install format-my-date
```

## Usage

You can import and use `format-my-date` in your project as follows:

1. Importing the Package

```javascript
const dateFormater = require('format-my-date');
```

## API

`formatDate(date: Date | string | number, format: DateFormat, locale?: string): string`
Formats a given date according to the specified format and locale.

Parameters:
  - `date`: The date to be formatted. This can be a Date object, a date string, or a timestamp.
    
  - `format`: The desired format for the date. Valid values are:
    
    - `'short'` - e.g., "12/31/2021"
    - `'medium'` - e.g., "Dec 31, 2021"
    - `'long'` - e.g., "Friday, December 31, 2021"
    - `'time'` - e.g., "12:00:00 AM"
      
  - `locale` (optional): A string representing the locale to be used for formatting. For example,
     `'en-US'` or `'fr-FR'`.
    
Returns:
  - "A formatted date string according to the specified format and locale."


## Examples

Basic Formatting:
```javascript
import { formatDate } from 'format-my-date';

const date = new Date(2021, 11, 31);
console.log(formatDate(date, 'short'));  // Output: "12/31/2021"
console.log(formatDate(date, 'medium')); // Output: "Dec 31, 2021"
console.log(formatDate(date, 'long'));   // Output: "Friday, December 31, 2021"
```

Formatting with Time:
```javascript
const date = new Date(2021, 11, 31, 0, 0, 0);
console.log(formatDate(date, 'time')); // Output: "12:00:00 AM"
```

Formatting with Locale:
```javascript
const date = new Date(2021, 11, 31);
console.log(formatDate(date, 'short', 'fr-FR')); // Output: "31/12/2021"
console.log(formatDate(date, 'medium', 'fr-FR')); // Output: "31 déc. 2021"
```

Edge Cases:
```javascript
const epochDate = new Date(0);
console.log(formatDate(epochDate, 'long')); // Output: "Thursday, January 1, 1970"

const leapYearDate = new Date(2020, 1, 29); // Feb 29, 2020 (Leap Year)
console.log(formatDate(leapYearDate, 'medium')); // Output: "Feb 29, 2020"
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.


## Contributing

Contributions are welcome! If you have any suggestions or improvements, please feel free to open an issue or submit a pull request.


## Author
- Devansh-Bhagania [github](https://github.com/Devansh-Bhagania)


