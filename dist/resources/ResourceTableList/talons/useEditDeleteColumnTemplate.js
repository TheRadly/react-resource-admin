"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _staticTexts = require("../../../staticTexts");
var _confirmpopup = require("primereact/confirmpopup");
var _react = require("react");
var _pageActionsModule = _interopRequireDefault(require("../../ResourceTableActions/styles/pageActions.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useEditDeleteColumnTemplate = _ref => {
  let {
    onClickDelete,
    confirmDeleteMessage
  } = _ref;
  const handleClickDelete = (0, _react.useCallback)(event => {
    (0, _confirmpopup.confirmPopup)({
      target: event.target,
      message: confirmDeleteMessage,
      icon: _staticTexts.EXCLAMATION_TRIANGLE_ICON,
      accept: onClickDelete,
      acceptClassName: _pageActionsModule.default.customAccept,
      rejectClassName: _pageActionsModule.default.customReject
    });
  }, [confirmDeleteMessage, onClickDelete]);
  return {
    handleClickDelete
  };
};
var _default = useEditDeleteColumnTemplate;
exports.default = _default;
//# sourceMappingURL=useEditDeleteColumnTemplate.js.map