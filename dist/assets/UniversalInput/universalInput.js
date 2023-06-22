"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _inputFloatLabel = _interopRequireDefault(require("../InputFloatLabel/inputFloatLabel"));
var _config = _interopRequireDefault(require("./config"));
var _switchInput = _interopRequireDefault(require("../SwitchInput/switchInput"));
var _dropdownInput = _interopRequireDefault(require("../DropdownInput/dropdownInput"));
var _InputMultiField = _interopRequireDefault(require("../InputMultiField"));
var _jsonEditor = _interopRequireDefault(require("../JsonEditor/jsonEditor"));
var _inputFieldsWithQuery = _interopRequireDefault(require("../InputFieldsWithQuery/inputFieldsWithQuery"));
var _InputArray = _interopRequireDefault(require("../InputArray"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const UniversalInput = _ref => {
  let {
    label,
    placeholder,
    value,
    onChange,
    disabled,
    currentOption,
    isMultiInput,
    isJson,
    withChildQuery,
    isShowQueryContainer,
    handleShowQueryContainer,
    isArray,
    isDisabled,
    fieldsToExcludeInQueryInput,
    extraFormCruds,
    isFloat,
    fullWidth,
    emptyLabel,
    closeTooltipLabel,
    addTooltipLabel,
    deleteTooltipLabel,
    editTooltipLabel
  } = _ref;
  return _react.default.createElement(_react.default.Fragment, null, typeof value === _config.default.NUMBER && _react.default.createElement(_inputFloatLabel.default, {
    fullWidth: fullWidth,
    label: label,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    isNumber: true
  }), typeof value === _config.default.BOOLEAN && _react.default.createElement(_switchInput.default, {
    label: label,
    checked: value,
    onChange: onChange,
    disabled: disabled
  }), isArray && _react.default.createElement(_InputArray.default, {
    disabled: disabled,
    fullWidth: fullWidth,
    values: value,
    label: label,
    onChange: onChange
  }), Array.isArray(value) && withChildQuery && _react.default.createElement(_inputFieldsWithQuery.default, {
    closeTooltipLabel: closeTooltipLabel,
    addTooltipLabel: addTooltipLabel,
    deleteTooltipLabel: deleteTooltipLabel,
    editTooltipLabel: editTooltipLabel,
    emptyLabel: emptyLabel,
    disabled: disabled,
    fullWidth: fullWidth,
    extraFormCruds: extraFormCruds,
    isShowQueryContainer: isShowQueryContainer,
    handleShowQueryContainer: handleShowQueryContainer,
    label: label,
    values: value,
    fieldsToExclude: fieldsToExcludeInQueryInput
  }), typeof value === _config.default.OBJECT && !isMultiInput && !withChildQuery && !isArray && _react.default.createElement(_dropdownInput.default, {
    disabled: disabled,
    fullWidth: fullWidth,
    currentOption: currentOption,
    onChange: onChange,
    options: value,
    placeholder: placeholder
  }), typeof value === _config.default.OBJECT && isMultiInput && _react.default.createElement(_InputMultiField.default, {
    fullWidth: fullWidth,
    disabled: disabled,
    onChange: onChange,
    values: value
  }), typeof value === _config.default.STRING && isJson && _react.default.createElement(_jsonEditor.default, {
    disabled: disabled,
    fullWidth: fullWidth,
    label: label,
    value: value,
    onChange: onChange
  }), typeof value === _config.default.STRING && !isJson && _react.default.createElement(_inputFloatLabel.default, {
    fullWidth: fullWidth,
    isFloat: isFloat,
    label: label,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: isDisabled || disabled
  }));
};
var _default = (0, _react.memo)(UniversalInput);
exports.default = _default;
//# sourceMappingURL=universalInput.js.map