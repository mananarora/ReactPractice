'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_es2.default);

var messages = {
  "Terra.ajax.error": "Error al cargar el contenido.",
  "Terra.demographicsBanner.dateOfBirth": "Fecha de nacimiento",
  "Terra.demographicsBanner.dateOfBirthFullText": "Fecha de nacimiento",
  "Terra.demographicsBanner.deceased": "Fallecido/a",
  "Terra.demographicsBanner.gestationalAge": "EG",
  "Terra.demographicsBanner.gestationalAgeFullText": "Edad gestacional",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "EPM",
  "Terra.demographicsBanner.postMenstrualAgeFullText": "Edad postmenstrual"
};
var areTranslationsLoaded = true;
var locale = 'es';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
