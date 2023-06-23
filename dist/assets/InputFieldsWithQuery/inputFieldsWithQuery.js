"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _button = require("primereact/button");
var _inputFieldsWithQueryWrapper = _interopRequireDefault(require("./styled/inputFieldsWithQueryWrapper"));
var _inputFieldsWrapper = _interopRequireDefault(require("./styled/inputFieldsWrapper"));
var _useInputFieldsWithQuery = _interopRequireDefault(require("./talons/useInputFieldsWithQuery"));
var _inputContainer = _interopRequireDefault(require("./styled/inputContainer"));
var _staticTexts = require("../../staticTexts");
var _inputField = _interopRequireDefault(require("./inputField"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InputFieldsWithQuery = _ref => {
  let {
    label,
    emptyLabel,
    values,
    isShowQueryContainer,
    handleShowQueryContainer,
    fieldsToExclude,
    extraFormCruds,
    fullWidth,
    disabled,
    closeTooltipLabel,
    addTooltipLabel,
    deleteTooltipLabel,
    editTooltipLabel
  } = _ref;
  const {
    tooltipLocale,
    buttonIcon
  } = (0, _useInputFieldsWithQuery.default)({
    isShowQueryContainer,
    closeTooltipLabel,
    addTooltipLabel
  });
  return (0, _jsxRuntime.jsxs)(_inputFieldsWithQueryWrapper.default, {
    fullWidth: fullWidth,
    children: [(0, _jsxRuntime.jsx)("label", {
      htmlFor: label,
      children: label
    }), (0, _jsxRuntime.jsxs)(_inputContainer.default, {
      children: [(0, _jsxRuntime.jsx)(_inputFieldsWrapper.default, {
        id: label,
        children: values.length ? values.map(item => (0, _jsxRuntime.jsx)(_inputField.default, {
          deleteTooltip: deleteTooltipLabel,
          editTooltip: editTooltipLabel,
          handleShowQueryContainer: handleShowQueryContainer,
          fieldsToExclude: fieldsToExclude,
          item: item,
          extraFormCruds: extraFormCruds
        })) : emptyLabel
      }), (0, _jsxRuntime.jsx)(_button.Button, {
        disabled: disabled,
        onClick: () => handleShowQueryContainer && handleShowQueryContainer(),
        outlined: true,
        icon: buttonIcon,
        tooltip: tooltipLocale,
        type: _staticTexts.BUTTON_INPUT
      })]
    })]
  });
};
var _default = InputFieldsWithQuery;
exports.default = _default;
//# sourceMappingURL=inputFieldsWithQuery.js.map