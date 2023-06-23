"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _confirmpopup = require("primereact/confirmpopup");
var _react = require("react");
var _staticTexts = require("../../../staticTexts");
const useResourceTableActions = _ref => {
  let {
    selectedValues,
    handleDeleteClick,
    isSelectable,
    isDisplaySearch,
    classes,
    deleteConfirmMessage,
    disabledTooltipDeleteLabel
  } = _ref;
  const isValuesSelected = !!(selectedValues !== null && selectedValues !== void 0 && selectedValues.length);
  const onConfirmClick = (0, _react.useCallback)(event => {
    (0, _confirmpopup.confirmPopup)({
      target: event.target,
      message: deleteConfirmMessage,
      icon: _staticTexts.EXCLAMATION_TRIANGLE_ICON,
      accept: handleDeleteClick,
      acceptClassName: classes.customAccept,
      rejectClassName: classes.customReject
    });
  }, [classes, handleDeleteClick, deleteConfirmMessage]);
  const deleteButtonProps = {
    tooltipOptions: {
      showOnDisabled: true,
      position: _staticTexts.POSITIONS.LEFT
    },
    disabled: !isValuesSelected,
    icon: _staticTexts.TRASH_ICON,
    onClick: onConfirmClick,
    size: _staticTexts.SMALL_SIZE,
    outlined: true
  };
  const tooltipExtraButtonProps = isValuesSelected ? {
    ...deleteButtonProps
  } : {
    ...deleteButtonProps,
    tooltip: disabledTooltipDeleteLabel
  };
  const selectIcon = isSelectable ? _staticTexts.CANCEL_ICON : _staticTexts.CHECK_ICON;
  const searchIcon = isDisplaySearch ? _staticTexts.CANCEL_ICON : _staticTexts.SEARCH_ICON;
  return {
    searchIcon,
    tooltipExtraButtonProps,
    selectIcon
  };
};
var _default = useResourceTableActions;
exports.default = _default;
//# sourceMappingURL=useResourceTableActions.js.map