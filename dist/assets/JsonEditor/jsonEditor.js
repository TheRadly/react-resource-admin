"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsonEditorWrapper = _interopRequireDefault(require("./styled/jsonEditorWrapper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const JsonEditor = _ref => {
  let {
    label,
    value,
    onChange,
    fullWidth = true,
    disabled
  } = _ref;
  return React.createElement(_jsonEditorWrapper.default, {
    fullWidth: fullWidth
  }, React.createElement("span", null, label), React.createElement("div", null, "Test!"));
};
var _default = JsonEditor;
exports.default = _default;
//# sourceMappingURL=jsonEditor.js.map