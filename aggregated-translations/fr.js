'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _fr = require('react-intl/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fr2.default);

var messages = {
  "Terra.ajax.error": "Échec du chargement du contenu.",
  "Terra.demographicsBanner.dateOfBirth": "Date de naissance",
  "Terra.demographicsBanner.dateOfBirthFullText": "Date de naissance",
  "Terra.demographicsBanner.deceased": "Décédé(e)",
  "Terra.demographicsBanner.gestationalAge": "Âge gestationnel",
  "Terra.demographicsBanner.gestationalAgeFullText": "Âge gestationnel",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "Âge postmenstruel",
  "Terra.demographicsBanner.postMenstrualAgeFullText": "Âge postmenstruel"
};
var areTranslationsLoaded = true;
var locale = 'fr';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
