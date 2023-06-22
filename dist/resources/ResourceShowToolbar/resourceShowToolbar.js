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
  return _react.default.createElement(_resourceShowToolbarWrapper.default, null, _react.default.createElement(_confirmpopup.ConfirmPopup, null), _react.default.createElement(_resourceTitleContainer.default, null, _react.default.createElement(_ResourceTableTitle.default, null, title), enabled && _react.default.createElement(_statusTag.default, {
    isCustom: false,
    enabled: !!enabled
  })), _react.default.createElement(_resourceActionsContainer.default, null, _react.default.createElement(_button.Button, {
    size: _staticTexts.SMALL_SIZE,
    label: editLabel,
    onClick: onEdit
  }), _react.default.createElement(_button.Button, {
    size: _staticTexts.SMALL_SIZE,
    label: deleteLabel,
    onClick: handleConfirmDelete
  })));
};
var _default = ResourceShowToolbar;
exports.default = _default;
//# sourceMappingURL=resourceShowToolbar.js.map