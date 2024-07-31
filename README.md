# NPM DateFormater

This is a lightweight NPM package for formatting dates in various formats. It provides an easy-to-use API for formatting dates according to your specific requirements.

## Installation

To install the NPM DateFormater package, simply run the following command:

```
npm install npm-dateformater
```

## Usage

To use the NPM DateFormater package in your project, follow these steps:

1. Import the package into your file:

```javascript
const dateFormater = require('npm-dateformater');
```

2. Format a date using the desired format:

```javascript
const formattedDate = dateFormater.formatDate(new Date(), 'YYYY-MM-DD');
console.log(formattedDate);
```

## Supported Formats

The NPM DateFormater package supports the following date formats:

- YYYY-MM-DD
- DD-MM-YYYY
- MM-DD-YYYY
- YYYY/MM/DD
- DD/MM/YYYY
- MM/DD/YYYY

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
