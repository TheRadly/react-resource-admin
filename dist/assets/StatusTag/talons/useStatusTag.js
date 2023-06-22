"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _staticTexts = require("../../../staticTexts");
const useStatusTag = _ref => {
  let {
    enabled,
    tagSeverity,
    isCustom,
    tagValue,
    enabledLabel,
    disabledLabel
  } = _ref;
  const customSeverity = (0, _react.useMemo)(() => tagSeverity || _staticTexts.INFO_SEVERITY, [tagSeverity]);
  const enabledValue = (0, _react.useMemo)(() => enabled ? enabledLabel : disabledLabel, [enabled, enabledLabel, disabledLabel]);
  const enabledSeverity = (0, _react.useMemo)(() => enabled ? _staticTexts.INFO_SEVERITY : _staticTexts.DANGER_SEVERITY, [enabled]);
  return {
    severity: isCustom ? customSeverity : enabledSeverity,
    value: isCustom ? tagValue : enabledValue
  };
};
var _default = useStatusTag;
exports.default = _default;
//# sourceMappingURL=useStatusTag.js.map