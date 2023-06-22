"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _button = require("primereact/button");
var _inputFieldWrapper = _interopRequireDefault(require("./styled/inputFieldWrapper"));
var _useInputField = _interopRequireDefault(require("./talons/useInputField"));
var _staticTexts = require("../../staticTexts");
var _inputFieldButtonsContainer = _interopRequireDefault(require("./styled/inputFieldButtonsContainer"));
var _confirmpopup = require("primereact/confirmpopup");
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
  return _react.default.createElement(_inputFieldWrapper.default, null, fields.map(_ref2 => {
    let {
      field,
      value
    } = _ref2;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", null, field, ":"), _react.default.createElement("span", null, value), _react.default.createElement(_inputFieldButtonsContainer.default, null, _react.default.createElement(_confirmpopup.ConfirmPopup, null), _react.default.createElement(_button.Button, {
      type: _staticTexts.BUTTON_INPUT,
      tooltip: deleteTooltip,
      onClick: handleDeleteItem,
      rounded: true,
      icon: _staticTexts.TRASH_ICON
    }), _react.default.createElement(_button.Button, {
      type: _staticTexts.BUTTON_INPUT,
      tooltip: editTooltip,
      onClick: () => handleShowQueryContainer && handleShowQueryContainer(item),
      rounded: true,
      icon: _staticTexts.EDIT_ICON
    })));
  }));
};
var _default = InputField;
exports.default = _default;
//# sourceMappingURL=inputField.js.map