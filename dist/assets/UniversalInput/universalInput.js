"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _inputFloatLabel = _interopRequireDefault(require("../InputFloatLabel/inputFloatLabel"));
var _config = _interopRequireDefault(require("./config"));
var _switchInput = _interopRequireDefault(require("../SwitchInput/switchInput"));
var _dropdownInput = _interopRequireDefault(require("../DropdownInput/dropdownInput"));
var _InputMultiField = _interopRequireDefault(require("../InputMultiField"));
var _jsonEditor = _interopRequireDefault(require("../JsonEditor/jsonEditor"));
var _react = require("react");
var _inputFieldsWithQuery = _interopRequireDefault(require("../InputFieldsWithQuery/inputFieldsWithQuery"));
var _InputArray = _interopRequireDefault(require("../InputArray"));
var _dateInput = _interopRequireDefault(require("../DateInput/dateInput"));
var _toFirstUpperCase = _interopRequireDefault(require("../../utils/toFirstUpperCase"));
var _textAreaInput = _interopRequireDefault(require("../TextAreaInput/textAreaInput"));
var _multiSelectInput = _interopRequireDefault(require("../MultiSelectInput/multiSelectInput"));
var _arrayOfObjectsInput = _interopRequireDefault(require("../ArrayOfObjectsInput/arrayOfObjectsInput"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const UniversalInput = _ref => {
  let {
    label: propLabel,
    placeholder,
    value,
    onChange,
    disabled,
    currentOption,
    isMultiInput,
    isMultiSelect,
    withChildQuery,
    handleShowQueryContainer,
    fieldsToExcludeInQueryInput,
    extraFormCruds,
    fullWidth,
    emptyLabel,
    isArray,
    isDisabled,
    isFloat,
    isJson,
    isShowQueryContainer,
    isDate,
    isTextArea,
    isArrayWithObjects,
    closeTooltipLabel,
    addTooltipLabel,
    deleteTooltipLabel,
    editTooltipLabel,
    initialValue,
    itemTitledBy,
    withoutUpperCasing,
    returnFullObjectEvent,
    withSearch
  } = _ref;
  const label = (0, _react.useMemo)(() => {
    if (withoutUpperCasing && propLabel) {
      return propLabel;
    } else if (propLabel) {
      return (0, _toFirstUpperCase.default)(propLabel, true);
    }
    return undefined;
  }, [propLabel, withoutUpperCasing]);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [Array.isArray(value) && isArrayWithObjects && (0, _jsxRuntime.jsx)(_arrayOfObjectsInput.default, {
      label: label,
      fullWidth: fullWidth,
      disabled: disabled,
      onChange: onChange,
      initialValue: initialValue,
      values: value,
      itemTitledBy: itemTitledBy,
      emptyMessage: emptyLabel
    }), Array.isArray(value) && isMultiSelect && (0, _jsxRuntime.jsx)(_multiSelectInput.default, {
      currentOption: currentOption,
      fullWidth: fullWidth,
      disabled: disabled,
      label: label,
      options: value,
      onChange: onChange
    }), isTextArea && (0, _jsxRuntime.jsx)(_textAreaInput.default, {
      fullWidth: fullWidth,
      disabled: disabled,
      label: label,
      value: value,
      onChange: onChange
    }), typeof value === _config.default.NUMBER && (0, _jsxRuntime.jsx)(_inputFloatLabel.default, {
      fullWidth: fullWidth,
      label: label,
      placeholder: placeholder,
      value: value,
      onChange: onChange,
      disabled: disabled,
      isNumber: true
    }), typeof value === _config.default.BOOLEAN && (0, _jsxRuntime.jsx)(_switchInput.default, {
      label: label,
      checked: value,
      onChange: onChange,
      disabled: disabled
    }), isArray && (0, _jsxRuntime.jsx)(_InputArray.default, {
      disabled: disabled,
      fullWidth: fullWidth,
      values: value,
      label: label,
      onChange: onChange
    }), Array.isArray(value) && withChildQuery && (0, _jsxRuntime.jsx)(_inputFieldsWithQuery.default, {
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
    }), typeof value === _config.default.OBJECT && !isDate && !isMultiInput && !isMultiSelect && !withChildQuery && !isArrayWithObjects && !isArray && (0, _jsxRuntime.jsx)(_dropdownInput.default, {
      label: label,
      returnFullObjectEvent: returnFullObjectEvent,
      disabled: disabled,
      fullWidth: fullWidth,
      currentOption: currentOption,
      onChange: onChange,
      withSearch: withSearch,
      options: value,
      placeholder: placeholder
    }), typeof value === _config.default.OBJECT && isMultiInput && (0, _jsxRuntime.jsx)(_InputMultiField.default, {
      fullWidth: fullWidth,
      disabled: disabled,
      onChange: onChange,
      values: value
    }), isDate && (0, _jsxRuntime.jsx)(_dateInput.default, {
      disabled: disabled,
      fullWidth: fullWidth,
      label: label,
      value: value,
      onChange: onChange
    }), typeof value === _config.default.STRING && isJson && (0, _jsxRuntime.jsx)(_jsonEditor.default, {
      disabled: disabled,
      fullWidth: fullWidth,
      label: label,
      value: value,
      onChange: onChange
    }), typeof value === _config.default.STRING && !isJson && !isDate && !isTextArea && (0, _jsxRuntime.jsx)(_inputFloatLabel.default, {
      fullWidth: fullWidth,
      isFloat: isFloat,
      label: label,
      placeholder: placeholder,
      value: value,
      onChange: onChange,
      disabled: isDisabled || disabled
    })]
  });
};
var _default = (0, _react.memo)(UniversalInput);
exports.default = _default;
//# sourceMappingURL=universalInput.js.map