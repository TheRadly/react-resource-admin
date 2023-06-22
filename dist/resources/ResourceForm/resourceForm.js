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
    cancelLabel
  } = _ref;
  const {
    handleSubmit,
    submitButtonLabel
  } = (0, _useResourceForm.default)({
    isEdit,
    formHandler,
    saveLabel,
    createLabel
  });
  return React.createElement(_resourceInputsFormWrapper.default, {
    onSubmit: handleSubmit
  }, children || values.map(_ref2 => {
    let {
      field,
      value,
      activeValue,
      isMultiInput,
      isJson,
      withChildQuery,
      excludeFields,
      isFloat
    } = _ref2;
    return React.createElement(_UniversalInput.default, {
      extraFormCruds: extraFormCruds,
      fieldsToExcludeInQueryInput: excludeFields,
      isShowQueryContainer: isShowQueryContainer,
      handleShowQueryContainer: handleShowQueryContainer,
      withChildQuery: withChildQuery,
      isJson: isJson,
      isMultiInput: isMultiInput,
      currentOption: activeValue,
      label: field,
      disabled: loading,
      value: value,
      isFloat: isFloat,
      onChange: data => handleChangeField(data, field)
    });
  }), React.createElement(_buttonsWrapper.default, null, React.createElement(_button.Button, {
    loading: loading,
    type: _staticTexts.SUBMIT_INPUT
  }, submitButtonLabel), React.createElement(_button.Button, {
    disabled: loading,
    type: _staticTexts.BUTTON_INPUT,
    onClick: onCancel
  }, cancelLabel)));
};
var _default = ResourceForm;
exports.default = _default;
//# sourceMappingURL=resourceForm.js.map