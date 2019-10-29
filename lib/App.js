"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _terraBase = _interopRequireDefault(require("terra-base"));

var _reactIntl = require("react-intl");

var _terraImage = _interopRequireDefault(require("terra-image"));

var _terraDemographicsBanner = _interopRequireDefault(require("terra-demographics-banner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toggle = function Toggle() {
  return _react.default.createElement("button", {
    type: "button"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "App.toggle"
  }));
};

var App = function App() {
  return _react.default.createElement("div", null, _react.default.createElement(_terraBase.default, {
    locale: "en"
  }, _react.default.createElement(Toggle, null), _react.default.createElement(_terraDemographicsBanner.default, {
    applicationContent: _react.default.createElement("span", {
      className: "risk-score"
    }, "5%"),
    age: "25 Years",
    dateOfBirth: "May 9, 1993",
    gender: "Male",
    gestationalAge: "April 5, 2016",
    identifiers: {
      MRN: 12343,
      REA: '3JSDA'
    },
    photo: _react.default.createElement(_terraImage.default, {
      alt: "My Cat",
      src: "http://lorempixel.com/50/50/animals/7/"
    }),
    personName: "Johnathon Doe",
    postMenstrualAge: "April 7, 2016",
    preferredFirstName: "John"
  })));
};

var _default = App;
exports.default = _default;