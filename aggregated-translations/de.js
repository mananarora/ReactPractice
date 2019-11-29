'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _de = require('react-intl/locale-data/de');

var _de2 = _interopRequireDefault(_de);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_de2.default);

var messages = {
  "Terra.ajax.error": "Inhalt konnte nicht geladen werden.",
  "Terra.demographicsBanner.dateOfBirth": "Geburtsdatum",
  "Terra.demographicsBanner.dateOfBirthFullText": "Geburtsdatum",
  "Terra.demographicsBanner.deceased": "Verstorben",
  "Terra.demographicsBanner.gestationalAge": "GA",
  "Terra.demographicsBanner.gestationalAgeFullText": "Gestationsalter",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "Postmenstruelles Alter",
  "Terra.demographicsBanner.postMenstrualAgeFullText": "Postmenstruelles Alter"
};
var areTranslationsLoaded = true;
var locale = 'de';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
