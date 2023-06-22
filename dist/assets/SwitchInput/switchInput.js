"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _inputswitch = require("primereact/inputswitch");
var _switchInputWrapper = _interopRequireDefault(require("./styled/switchInputWrapper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SwitchInput = _ref => {
  let {
    checked,
    onChange,
    disabled,
    withLabel = true,
    label
  } = _ref;
  return _react.default.createElement(_switchInputWrapper.default, null, _react.default.createElement(_inputswitch.InputSwitch, {
    id: label,
    checked: checked,
    onChange: e => onChange(e.value),
    disabled: disabled
  }), withLabel && _react.default.createElement("label", {
    htmlFor: label
  }, label));
};
var _default = SwitchInput;
exports.default = _default;
//# sourceMappingURL=switchInput.js.map