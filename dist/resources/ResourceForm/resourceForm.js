"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _button = require("primereact/button");
var _UniversalInput = _interopRequireDefault(require("../../assets/UniversalInput"));
var _buttonsWrapper = _interopRequireDefault(require("./styled/buttonsWrapper"));
var _resourceInputsFormWrapper = _interopRequireDefault(require("./styled/resourceInputsFormWrapper"));
var _staticTexts = require("../../staticTexts");
var _useResourceForm = _interopRequireDefault(require("./talons/useResourceForm"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceForm = _ref => {
  let {
    loading,
    children,
    values,
    extraFormCruds,
    isShowQueryContainer,
    isEdit,
    handleShowQueryContainer,
    handleChangeField,
    formHandler,
    onCancel,
    saveLabel,
    createLabel,
    cancelLabel,
    hideCancel
  } = _ref;
  const {
    handleSubmit,
    submitButtonLabel,
    handleSetFieldValue
  } = (0, _useResourceForm.default)({
    isEdit,
    formHandler,
    saveLabel,
    createLabel,
    handleChangeField
  });
  return (0, _jsxRuntime.jsxs)(_resourceInputsFormWrapper.default, {
    onSubmit: handleSubmit,
    children: [children || values.map(_ref2 => {
      let {
        label,
        field,
        value,
        activeValue,
        isMultiInput,
        isMultiSelect,
        isJson,
        withChildQuery,
        excludeFields,
        isFloat,
        isDate,
        placeholder,
        isTextArea,
        isArray,
        initialValue,
        itemTitledBy,
        isArrayWithObject,
        emptyLabel,
        fullWidth
      } = _ref2;
      return (0, _jsxRuntime.jsx)(_UniversalInput.default, {
        fullWidth: fullWidth,
        emptyLabel: emptyLabel,
        isArrayWithObjects: isArrayWithObject,
        initialValue: initialValue,
        itemTitledBy: itemTitledBy,
        isArray: isArray,
        isMultiSelect: isMultiSelect,
        isTextArea: isTextArea,
        isDate: isDate,
        extraFormCruds: extraFormCruds,
        fieldsToExcludeInQueryInput: excludeFields,
        isShowQueryContainer: isShowQueryContainer,
        handleShowQueryContainer: handleShowQueryContainer,
        withChildQuery: withChildQuery,
        isJson: isJson,
        isMultiInput: isMultiInput,
        currentOption: activeValue,
        label: label || field,
        placeholder: placeholder,
        disabled: loading,
        value: value,
        isFloat: isFloat,
        onChange: data => handleSetFieldValue(data, field)
      });
    }), (0, _jsxRuntime.jsxs)(_buttonsWrapper.default, {
      children: [(0, _jsxRuntime.jsx)(_button.Button, {
        loading: loading,
        type: _staticTexts.SUBMIT_INPUT,
        children: submitButtonLabel
      }), !hideCancel && (0, _jsxRuntime.jsx)(_button.Button, {
        disabled: loading,
        type: _staticTexts.BUTTON_INPUT,
        onClick: onCancel,
        children: cancelLabel
      })]
    })]
  });
};
var _default = ResourceForm;
exports.default = _default;
//# sourceMappingURL=resourceForm.js.map