"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _jsonEditorWrapper = _interopRequireDefault(require("./styled/jsonEditorWrapper"));
var _react2 = _interopRequireDefault(require("@monaco-editor/react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const JsonEditor = _ref => {
  let {
    label,
    value,
    onChange,
    fullWidth = true,
    disabled
  } = _ref;
  return _react.default.createElement(_jsonEditorWrapper.default, {
    fullWidth: fullWidth
  }, _react.default.createElement("span", null, label), _react.default.createElement(_react2.default, {
    defaultLanguage: "json",
    value: value,
    onChange: val => !disabled && onChange(val)
  }));
};
var _default = JsonEditor;
exports.default = _default;
//# sourceMappingURL=jsonEditor.js.map