"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _progressspinner = require("primereact/progressspinner");
var _loaderSpinnerWrapper = _interopRequireDefault(require("./styled/loaderSpinnerWrapper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LoaderSpinner = _ref => {
  let {
    style,
    strokeWidth = "4"
  } = _ref;
  return _react.default.createElement(_loaderSpinnerWrapper.default, null, _react.default.createElement(_progressspinner.ProgressSpinner, {
    style: style,
    strokeWidth: strokeWidth
  }));
};
var _default = LoaderSpinner;
exports.default = _default;
//# sourceMappingURL=loaderSpinner.js.map