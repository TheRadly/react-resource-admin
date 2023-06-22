"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _staticTexts = require("../../../staticTexts");
var _react = require("react");
const useInputFieldsWithQuery = _ref => {
  let {
    isShowQueryContainer,
    closeTooltipLabel,
    addTooltipLabel
  } = _ref;
  const tooltipLocale = (0, _react.useMemo)(() => isShowQueryContainer ? closeTooltipLabel : addTooltipLabel, [isShowQueryContainer, closeTooltipLabel, addTooltipLabel]);
  const buttonIcon = (0, _react.useMemo)(() => isShowQueryContainer ? _staticTexts.CANCEL_ICON : _staticTexts.PLUS_ICON, [isShowQueryContainer]);
  return {
    buttonIcon,
    tooltipLocale
  };
};
var _default = useInputFieldsWithQuery;
exports.default = _default;
//# sourceMappingURL=useInputFieldsWithQuery.js.map