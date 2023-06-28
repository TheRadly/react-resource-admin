"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _inputswitch = require("primereact/inputswitch");
var _switchInputWrapper = _interopRequireDefault(require("./styled/switchInputWrapper"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SwitchInput = _ref => {
  let {
    checked,
    onChange,
    disabled,
    withLabel = true,
    label
  } = _ref;
  return (0, _jsxRuntime.jsxs)(_switchInputWrapper.default, {
    children: [(0, _jsxRuntime.jsx)(_inputswitch.InputSwitch, {
      id: label,
      checked: checked,
      onChange: e => onChange(e.value),
      disabled: disabled
    }), withLabel && (0, _jsxRuntime.jsx)("label", {
      htmlFor: label,
      children: label
    })]
  });
};
var _default = SwitchInput;
exports.default = _default;
//# sourceMappingURL=switchInput.js.map