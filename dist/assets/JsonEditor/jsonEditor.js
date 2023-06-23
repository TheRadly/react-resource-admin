"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsonEditorWrapper = _interopRequireDefault(require("./styled/jsonEditorWrapper"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const JsonEditor = _ref => {
  let {
    label,
    value,
    onChange,
    fullWidth = true,
    disabled
  } = _ref;
  return (0, _jsxRuntime.jsxs)(_jsonEditorWrapper.default, {
    fullWidth: fullWidth,
    children: [(0, _jsxRuntime.jsx)("span", {
      children: label
    }), (0, _jsxRuntime.jsx)("div", {
      children: "Test!"
    })]
  });
};
var _default = JsonEditor;
exports.default = _default;
//# sourceMappingURL=jsonEditor.js.map