'use strict';

var loadDeIntl = function loadDeIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/de.js');
  }, 'de-intl-local');
};

var loadEnIntl = function loadEnIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/en.js');
  }, 'en-intl-local');
};

var loadEnGBIntl = function loadEnGBIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/en-GB.js');
  }, 'en-GB-intl-local');
};

var loadEnUSIntl = function loadEnUSIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/en-US.js');
  }, 'en-US-intl-local');
};

var loadEsIntl = function loadEsIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/es.js');
  }, 'es-intl-local');
};

var loadFrIntl = function loadFrIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/fr.js');
  }, 'fr-intl-local');
};

var loadPtIntl = function loadPtIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/pt.js');
  }, 'pt-intl-local');
};

var intlLoaders = {
  'de': loadDeIntl,
  'en': loadEnIntl,
  'en-GB': loadEnGBIntl,
  'en-US': loadEnUSIntl,
  'es': loadEsIntl,
  'fr': loadFrIntl,
  'pt': loadPtIntl
};

module.exports = intlLoaders;