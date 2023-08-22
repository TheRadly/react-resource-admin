"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _multiselect = require("primereact/multiselect");
var _multiSelectInputWrapper = _interopRequireDefault(require("./styled/multiSelectInputWrapper"));
var _useMultiSelectInput = _interopRequireDefault(require("./talons/useMultiSelectInput"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MultiSelectInput = _ref => {
  let {
    label,
    options,
    currentOption,
    onChange,
    disabled,
    fullWidth
  } = _ref;
  const {
    handleChangeMultiSelect,
    selectedOption
  } = (0, _useMultiSelectInput.default)({
    onChange
  });
  return (0, _jsxRuntime.jsxs)(_multiSelectInputWrapper.default, {
    fullWidth: fullWidth,
    children: [label && (0, _jsxRuntime.jsx)("label", {
      htmlFor: label,
      children: label
    }), (0, _jsxRuntime.jsx)(_multiselect.MultiSelect, {
      id: label,
      options: options,
      disabled: disabled,
      value: selectedOption || currentOption,
      onChange: handleChangeMultiSelect,
      optionLabel: "name"
    })]
  });
};
var _default = MultiSelectInput;
exports.default = _default;
//# sourceMappingURL=multiSelectInput.js.map