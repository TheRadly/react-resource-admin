"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _button = require("primereact/button");
var _inputFieldWrapper = _interopRequireDefault(require("./styled/inputFieldWrapper"));
var _useInputField = _interopRequireDefault(require("./talons/useInputField"));
var _staticTexts = require("../../staticTexts");
var _inputFieldButtonsContainer = _interopRequireDefault(require("./styled/inputFieldButtonsContainer"));
var _confirmpopup = require("primereact/confirmpopup");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InputField = _ref => {
  let {
    deleteTooltip,
    editTooltip,
    item,
    fieldsToExclude,
    extraFormCruds,
    handleShowQueryContainer
  } = _ref;
  const {
    fields,
    handleDeleteItem
  } = (0, _useInputField.default)({
    item,
    fieldsToExclude,
    extraFormCruds
  });
  return (0, _jsxRuntime.jsx)(_inputFieldWrapper.default, {
    children: fields.map(_ref2 => {
      let {
        field,
        value
      } = _ref2;
      return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [(0, _jsxRuntime.jsxs)("label", {
          children: [field, ":"]
        }), (0, _jsxRuntime.jsx)("span", {
          children: value
        }), (0, _jsxRuntime.jsxs)(_inputFieldButtonsContainer.default, {
          children: [(0, _jsxRuntime.jsx)(_confirmpopup.ConfirmPopup, {}), (0, _jsxRuntime.jsx)(_button.Button, {
            type: _staticTexts.BUTTON_INPUT,
            tooltip: deleteTooltip,
            onClick: handleDeleteItem,
            rounded: true,
            icon: _staticTexts.TRASH_ICON
          }), (0, _jsxRuntime.jsx)(_button.Button, {
            type: _staticTexts.BUTTON_INPUT,
            tooltip: editTooltip,
            onClick: () => handleShowQueryContainer && handleShowQueryContainer(item),
            rounded: true,
            icon: _staticTexts.EDIT_ICON
          })]
        })]
      });
    })
  });
};
var _default = InputField;
exports.default = _default;
//# sourceMappingURL=inputField.js.map