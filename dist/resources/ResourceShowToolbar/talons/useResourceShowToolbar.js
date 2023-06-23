"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _staticTexts = require("../../../staticTexts");
var _confirmpopup = require("primereact/confirmpopup");
var _react = require("react");
var _pageActions = _interopRequireDefault(require("../../ResourceTableActions/styles/pageActions.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useResourceShowToolbar = _ref => {
  let {
    onDelete,
    deleteConfirmMessage
  } = _ref;
  const handleConfirmDelete = (0, _react.useCallback)(event => {
    (0, _confirmpopup.confirmPopup)({
      target: event.target,
      message: deleteConfirmMessage,
      icon: _staticTexts.EXCLAMATION_TRIANGLE_ICON,
      accept: onDelete,
      acceptClassName: _pageActions.default.customAccept,
      rejectClassName: _pageActions.default.customReject
    });
  }, [onDelete, deleteConfirmMessage]);
  return {
    handleConfirmDelete
  };
};
var _default = useResourceShowToolbar;
exports.default = _default;
//# sourceMappingURL=useResourceShowToolbar.js.map