"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _dropdown = require("primereact/dropdown");
var _dropdownInputWrapper = _interopRequireDefault(require("./styled/dropdownInputWrapper"));
var _useDropdownInput = _interopRequireDefault(require("./talons/useDropdownInput"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DropdownInput = _ref => {
  let {
    onChange,
    options,
    currentOption,
    fullWidth,
    disabled,
    placeholder
  } = _ref;
  const {
    selectedDropdown,
    handleChangeValue
  } = (0, _useDropdownInput.default)({
    onChange
  });
  return _react.default.createElement(_dropdownInputWrapper.default, {
    fullWidth: fullWidth
  }, _react.default.createElement(_dropdown.Dropdown, {
    disabled: disabled,
    value: selectedDropdown || currentOption,
    onChange: handleChangeValue,
    optionLabel: "name",
    options: options,
    placeholder: placeholder
  }));
};
var _default = DropdownInput;
exports.default = _default;
//# sourceMappingURL=dropdownInput.js.map