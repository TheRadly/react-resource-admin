"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _inputnumber = require("primereact/inputnumber");
var _inputtext = require("primereact/inputtext");
var _useInputMultiField = _interopRequireDefault(require("./talons/useInputMultiField"));
var _inputMultiFieldWrapper = _interopRequireDefault(require("./styled/inputMultiFieldWrapper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InputMultiField = _ref => {
  let {
    disabled,
    values,
    onChange,
    fullWidth
  } = _ref;
  const {
    handleChangeInput
  } = (0, _useInputMultiField.default)({
    onChange,
    values
  });
  return _react.default.createElement(_inputMultiFieldWrapper.default, {
    fullWidth: fullWidth,
    className: "p-inputgroup"
  }, values && values.length && values.map(_ref2 => {
    let {
      field,
      value
    } = _ref2;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
      className: "p-inputgroup-addon"
    }, field), typeof value === "number" ? _react.default.createElement(_inputnumber.InputNumber, {
      value: value,
      disabled: disabled,
      onChange: e => handleChangeInput(field, e.value || 0)
    }) : _react.default.createElement(_inputtext.InputText, {
      value: value,
      disabled: disabled,
      onChange: e => handleChangeInput(field, e.target.value || "")
    }));
  }));
};
var _default = InputMultiField;
exports.default = _default;
//# sourceMappingURL=inputMultiField.js.map