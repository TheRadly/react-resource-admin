"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const JsonEditorWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: ", ";\n  height: 350px;\n  margin-bottom: 20px;\n\n  & > span {\n    font-size: 14px;\n    color: var(--clr-blackFontColor);\n  }\n\n  & > section {\n    margin-top: 10px;\n    border: 1px solid var(--clr-borderColor);\n    padding: 10px;\n  }\n"])), props => props.fullWidth ? "100%" : "50%");
var _default = JsonEditorWrapper;
exports.default = _default;
//# sourceMappingURL=jsonEditorWrapper.js.map