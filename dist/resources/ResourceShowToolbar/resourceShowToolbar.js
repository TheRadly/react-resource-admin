"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _button = require("primereact/button");
var _ResourceTableTitle = _interopRequireDefault(require("../ResourceTableTitle"));
var _statusTag = _interopRequireDefault(require("../../assets/StatusTag/statusTag"));
var _resourceShowToolbarWrapper = _interopRequireDefault(require("./styled/resourceShowToolbarWrapper"));
var _resourceTitleContainer = _interopRequireDefault(require("./styled/resourceTitleContainer"));
var _resourceActionsContainer = _interopRequireDefault(require("./styled/resourceActionsContainer"));
var _useResourceShowToolbar = _interopRequireDefault(require("./talons/useResourceShowToolbar"));
var _confirmpopup = require("primereact/confirmpopup");
var _staticTexts = require("../../staticTexts");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceShowToolbar = _ref => {
  let {
    title,
    enabled,
    editLabel,
    deleteLabel,
    onDelete,
    onEdit,
    deleteConfirmMessage
  } = _ref;
  const {
    handleConfirmDelete
  } = (0, _useResourceShowToolbar.default)({
    onDelete,
    deleteConfirmMessage
  });
  return (0, _jsxRuntime.jsxs)(_resourceShowToolbarWrapper.default, {
    children: [(0, _jsxRuntime.jsx)(_confirmpopup.ConfirmPopup, {}), (0, _jsxRuntime.jsxs)(_resourceTitleContainer.default, {
      children: [(0, _jsxRuntime.jsx)(_ResourceTableTitle.default, {
        children: title
      }), enabled && (0, _jsxRuntime.jsx)(_statusTag.default, {
        isCustom: false,
        enabled: !!enabled
      })]
    }), (0, _jsxRuntime.jsxs)(_resourceActionsContainer.default, {
      children: [(0, _jsxRuntime.jsx)(_button.Button, {
        size: _staticTexts.SMALL_SIZE,
        label: editLabel,
        onClick: onEdit
      }), (0, _jsxRuntime.jsx)(_button.Button, {
        size: _staticTexts.SMALL_SIZE,
        label: deleteLabel,
        onClick: handleConfirmDelete
      })]
    })]
  });
};
var _default = ResourceShowToolbar;
exports.default = _default;
//# sourceMappingURL=resourceShowToolbar.js.map