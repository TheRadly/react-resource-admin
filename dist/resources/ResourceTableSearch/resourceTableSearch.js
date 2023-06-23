"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SearchInput = _interopRequireDefault(require("../../assets/SearchInput"));
var _resourceTableSearchWrapper = _interopRequireDefault(require("./styled/resourceTableSearchWrapper"));
var _dropdown = require("primereact/dropdown");
var _useResourceTableSearch = _interopRequireDefault(require("./talons/useResourceTableSearch"));
var _config = require("./config");
var _switchInput = _interopRequireDefault(require("../../assets/SwitchInput/switchInput"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceTableSearch = _ref => {
  let {
    handleChangeTableSearch,
    fields,
    getQueryMethod,
    excludedSearchFields,
    searchPlaceholder,
    dropdownPlaceholder
  } = _ref;
  const {
    isChecked,
    onChangeSwitch,
    dropdownFields,
    onChangeSearch,
    onSelectDropdownField,
    selectedField
  } = (0, _useResourceTableSearch.default)({
    handleChangeTableSearch,
    fields,
    getQueryMethod,
    excludedSearchFields
  });
  return (0, _jsxRuntime.jsxs)(_resourceTableSearchWrapper.default, {
    children: [(0, _jsxRuntime.jsx)(_dropdown.Dropdown, {
      value: selectedField,
      onChange: onSelectDropdownField,
      options: dropdownFields,
      optionLabel: "name",
      placeholder: dropdownPlaceholder
    }), _config.BOOLEAN_VALUES.includes(selectedField === null || selectedField === void 0 ? void 0 : selectedField.code) ? (0, _jsxRuntime.jsx)(_switchInput.default, {
      withLabel: false,
      checked: isChecked,
      onChange: onChangeSwitch
    }) : (0, _jsxRuntime.jsx)(_SearchInput.default, {
      placeholder: searchPlaceholder,
      onChange: onChangeSearch
    })]
  });
};
var _default = ResourceTableSearch;
exports.default = _default;
//# sourceMappingURL=resourceTableSearch.js.map