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
var _jsxRuntime = require("react/jsx-runtime");
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
    disabledTooltipDeleteLabel,
    hideCreate,
    hideMultiSelect
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
  return (0, _jsxRuntime.jsxs)(_pageActionsWrapper.default, {
    children: [(0, _jsxRuntime.jsx)(_confirmpopup.ConfirmPopup, {}), !isSelectable ? (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [!hideCreate && (0, _jsxRuntime.jsx)(_button.Button, {
        onClick: handleCreateButton,
        size: _staticTexts.SMALL_SIZE,
        icon: _staticTexts.PLUS_ICON,
        label: createLabel
      }), !hideSearch && (0, _jsxRuntime.jsx)(_button.Button, {
        outlined: true,
        onClick: handleChangeSearchMode,
        size: _staticTexts.SMALL_SIZE,
        icon: searchIcon
      })]
    }) : null, !hideMultiSelect && (0, _jsxRuntime.jsx)(_button.Button, {
      outlined: true,
      size: _staticTexts.SMALL_SIZE,
      onClick: handleChangeSelectMode,
      icon: selectIcon
    }), isSelectable ? (0, _jsxRuntime.jsx)("div", {
      children: (0, _jsxRuntime.jsx)(_button.Button, {
        ...tooltipExtraButtonProps
      })
    }) : null]
  });
};
var _default = ResourceTableActions;
exports.default = _default;
//# sourceMappingURL=resourceTableActions.js.map