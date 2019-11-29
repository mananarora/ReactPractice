'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _pt = require('react-intl/locale-data/pt');

var _pt2 = _interopRequireDefault(_pt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_pt2.default);

var messages = {
  "Terra.ajax.error": "Falha ao carregar conteúdo.",
  "Terra.demographicsBanner.dateOfBirth": "DN",
  "Terra.demographicsBanner.dateOfBirthFullText": "Data Nasc",
  "Terra.demographicsBanner.deceased": "Óbito",
  "Terra.demographicsBanner.gestationalAge": "IG",
  "Terra.demographicsBanner.gestationalAgeFullText": "Idade gestacional",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "IPM",
  "Terra.demographicsBanner.postMenstrualAgeFullText": "Idade pós-mentrual"
};
var areTranslationsLoaded = true;
var locale = 'pt';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
