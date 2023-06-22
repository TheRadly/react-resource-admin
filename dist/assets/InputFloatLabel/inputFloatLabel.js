"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _inputtext = require("primereact/inputtext");
var _inputnumber = require("primereact/inputnumber");
var _inputFloatLabelWrapper = _interopRequireDefault(require("./styled/inputFloatLabelWrapper"));
var _useInputFloatLabel = _interopRequireDefault(require("./talons/useInputFloatLabel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InputFloatLabel = _ref => {
  let {
    label,
    placeholder,
    value,
    onChange,
    isNumber,
    isFloat,
    disabled,
    withoutPlaceholder,
    type,
    fullWidth
  } = _ref;
  const {
    handleChangeInputText
  } = (0, _useInputFloatLabel.default)({
    isFloat,
    onChange
  });
  return _react.default.createElement(_inputFloatLabelWrapper.default, {
    fullWidth: fullWidth
  }, _react.default.createElement("label", {
    htmlFor: label
  }, label), isNumber ? _react.default.createElement(_inputnumber.InputNumber, {
    placeholder: !withoutPlaceholder ? placeholder : undefined,
    defaultValue: 0,
    showButtons: true,
    disabled: disabled,
    id: label,
    min: 0,
    value: Number(value) || 0,
    onChange: e => onChange(e.value || 0)
  }) : _react.default.createElement(_inputtext.InputText, {
    type: type || "text",
    placeholder: !withoutPlaceholder ? placeholder : undefined,
    disabled: disabled,
    id: label,
    value: value,
    onChange: handleChangeInputText
  }));
};
var _default = InputFloatLabel;
exports.default = _default;
//# sourceMappingURL=inputFloatLabel.js.map