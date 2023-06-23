"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _staticTexts = require("../../staticTexts");
var _button = require("primereact/button");
var _editColumnWrapper = _interopRequireDefault(require("./styled/editColumnWrapper"));
var _confirmpopup = require("primereact/confirmpopup");
var _useEditDeleteColumnTemplate = _interopRequireDefault(require("./talons/useEditDeleteColumnTemplate"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const EditDeleteColumnTemplate = _ref => {
  let {
    onClickEdit,
    onClickDelete,
    confirmDeleteMessage
  } = _ref;
  const {
    handleClickDelete
  } = (0, _useEditDeleteColumnTemplate.default)({
    onClickDelete,
    confirmDeleteMessage
  });
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_confirmpopup.ConfirmPopup, {}), (0, _jsxRuntime.jsxs)(_editColumnWrapper.default, {
      children: [(0, _jsxRuntime.jsx)(_button.Button, {
        onClick: onClickEdit,
        size: _staticTexts.SMALL_SIZE,
        rounded: true,
        icon: _staticTexts.EDIT_ICON
      }), (0, _jsxRuntime.jsx)(_button.Button, {
        onClick: handleClickDelete,
        size: _staticTexts.SMALL_SIZE,
        rounded: true,
        icon: _staticTexts.TRASH_ICON
      })]
    })]
  });
};
var _default = EditDeleteColumnTemplate;
exports.default = _default;
//# sourceMappingURL=editDeleteColumnTemplate.js.map