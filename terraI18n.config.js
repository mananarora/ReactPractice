const { resolve } = require('path');

module.exports = {
  directories: [
    resolve('node_modules', '*', 'translations'),
  ],
  locales: ['de', 'en', 'en-GB', 'en-US', 'es', 'fr', 'pt'],
};