"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _terraBase = _interopRequireDefault(require("terra-base"));

var _reactIntl = require("react-intl");

var _moment = _interopRequireDefault(require("moment"));

require("moment-timezone");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_terraBase.default, {
        locale: "en"
      }, _react.default.createElement(_reactIntl.FormattedDate, {
        value: (0, _moment.default)().tz('America/Chicago').format(),
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/Chicago\"",
        timeZoneName: "America/Chicago"
      }), ";"));
    }
  }]);

  return App;
}();

;
var _default = App;
exports.default = _default;