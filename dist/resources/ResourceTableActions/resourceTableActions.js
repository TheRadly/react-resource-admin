"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _confirmpopup = require("primereact/confirmpopup");
var _button = require("primereact/button");
var _pageActionsWrapper = _interopRequireDefault(require("./styled/pageActionsWrapper"));
var _useResourceTableActions = _interopRequireDefault(require("./talons/useResourceTableActions"));
var _staticTexts = require("../../staticTexts");
var _pageActions = _interopRequireDefault(require("./styles/pageActions.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceTableActions = _ref => {
  let {
    handleDeleteClick,
    handleChangeSelectMode,
    handleChangeSearchMode,
    handleCreateButton,
    isSelectable,
    isDisplaySearch,
    selectedValues,
    hideSearch,
    createLabel,
    deleteConfirmMessage,
    disabledTooltipDeleteLabel
  } = _ref;
  const {
    tooltipExtraButtonProps,
    selectIcon,
    searchIcon
  } = (0, _useResourceTableActions.default)({
    classes: _pageActions.default,
    selectedValues,
    handleDeleteClick,
    isSelectable,
    isDisplaySearch,
    createLabel,
    deleteConfirmMessage,
    disabledTooltipDeleteLabel
  });
  return React.createElement(_pageActionsWrapper.default, null, React.createElement(_confirmpopup.ConfirmPopup, null), !isSelectable ? React.createElement(React.Fragment, null, React.createElement(_button.Button, {
    onClick: handleCreateButton,
    size: _staticTexts.SMALL_SIZE,
    icon: _staticTexts.PLUS_ICON,
    label: createLabel
  }), !hideSearch && React.createElement(_button.Button, {
    className: _pageActions.default.outlined,
    onClick: handleChangeSearchMode,
    size: _staticTexts.SMALL_SIZE,
    icon: searchIcon
  })) : null, React.createElement(_button.Button, {
    className: _pageActions.default.outlined,
    size: _staticTexts.SMALL_SIZE,
    onClick: handleChangeSelectMode,
    icon: selectIcon
  }), React.createElement(_button.Button, tooltipExtraButtonProps));
};
var _default = ResourceTableActions;
exports.default = _default;
//# sourceMappingURL=resourceTableActions.js.map