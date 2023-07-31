"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _textAreaInputWrapper = _interopRequireDefault(require("./styled/textAreaInputWrapper"));
var _inputtextarea = require("primereact/inputtextarea");
var _useTextAreaInput = _interopRequireDefault(require("./talons/useTextAreaInput"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TextAreaInput = _ref => {
  let {
    label,
    value,
    disabled,
    onChange,
    fullWidth
  } = _ref;
  const {
    handleChangeTextAreaInput
  } = (0, _useTextAreaInput.default)({
    onChange
  });
  return (0, _jsxRuntime.jsxs)(_textAreaInputWrapper.default, {
    fullWidth: fullWidth,
    children: [(0, _jsxRuntime.jsx)("label", {
      htmlFor: label,
      children: label
    }), (0, _jsxRuntime.jsx)(_inputtextarea.InputTextarea, {
      autoResize: true,
      disabled: disabled,
      value: value,
      onChange: handleChangeTextAreaInput,
      cols: 5
    })]
  });
};
var _default = TextAreaInput;
exports.default = _default;
//# sourceMappingURL=textAreaInput.js.map