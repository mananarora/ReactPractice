const aggregateTranslations = require('terra-aggregate-translations/lib/aggregate-translations');

const aggregateOptions = {
    baseDir: __dirname,
    directories: ['./src/**/translations', './translations', './node_modules/**/translations'],
    locales: ['de', 'en-GB', 'en-US', 'en', 'es', 'fr', 'pt'],
    outputDir: './aggregated-translations',
};

module.exports = aggregateTranslations(aggregateOptions);