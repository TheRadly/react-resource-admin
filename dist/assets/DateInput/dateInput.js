"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _calendar = require("primereact/calendar");
var _DateInputWrapper = _interopRequireDefault(require("./styled/DateInputWrapper"));
var _useDateInput = _interopRequireDefault(require("./talons/useDateInput"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DateInput = _ref => {
  let {
    label,
    onChange,
    fullWidth,
    disabled,
    value
  } = _ref;
  const {
    handleChangeDateInput
  } = (0, _useDateInput.default)({
    onChange
  });
  return (0, _jsxRuntime.jsxs)(_DateInputWrapper.default, {
    fullWidth: fullWidth,
    children: [(0, _jsxRuntime.jsx)("label", {
      htmlFor: label,
      children: label
    }), (0, _jsxRuntime.jsx)(_calendar.Calendar, {
      id: label,
      value: value,
      onChange: handleChangeDateInput,
      showTime: true,
      disabled: disabled,
      hourFormat: "24"
    })]
  });
};
var _default = DateInput;
exports.default = _default;
//# sourceMappingURL=dateInput.js.map