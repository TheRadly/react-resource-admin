"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _tag = require("primereact/tag");
var _statusTagWrapper = _interopRequireDefault(require("./styled/statusTagWrapper"));
var _useStatusTag = _interopRequireDefault(require("./talons/useStatusTag"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const StatusTag = _ref => {
  let {
    enabled,
    isCustom = true,
    tagValue,
    tagSeverity,
    enabledLabel,
    disabledLabel,
    className
  } = _ref;
  const {
    severity,
    value
  } = (0, _useStatusTag.default)({
    tagValue,
    isCustom,
    enabled,
    tagSeverity,
    enabledLabel,
    disabledLabel
  });
  return className ? _react.default.createElement(_tag.Tag, {
    className: className,
    severity: severity,
    value: value
  }) : _react.default.createElement(_statusTagWrapper.default, null, _react.default.createElement(_tag.Tag, {
    severity: severity,
    value: value
  }));
};
var _default = StatusTag;
exports.default = _default;
//# sourceMappingURL=statusTag.js.map