"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _chips = require("primereact/chips");
var _useInputArray = _interopRequireDefault(require("./talons/useInputArray"));
var _inputArrayWrapper = _interopRequireDefault(require("./styled/inputArrayWrapper"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InputArray = _ref => {
  let {
    fullWidth,
    values,
    onChange,
    disabled,
    label
  } = _ref;
  const {
    chipsValues,
    handleChangeChipsValues
  } = (0, _useInputArray.default)({
    values,
    onChange
  });
  return (0, _jsxRuntime.jsxs)(_inputArrayWrapper.default, {
    fullWidth: fullWidth,
    children: [label && (0, _jsxRuntime.jsx)("label", {
      htmlFor: label,
      children: label
    }), (0, _jsxRuntime.jsx)(_chips.Chips, {
      disabled: disabled,
      id: label,
      value: chipsValues,
      onChange: handleChangeChipsValues,
      separator: ","
    })]
  });
};
var _default = InputArray;
exports.default = _default;
//# sourceMappingURL=inputArray.js.map