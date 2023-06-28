"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const InputArrayWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  label {\n    text-transform: capitalize;\n    font-family: var(--font-family);\n    font-size: 14px;\n    color: var(--clr-blackFontColor);\n  }\n\n  ul {\n    width: 100%;\n  }\n"])), props => props.fullWidth ? "100%" : "50%");
var _default = InputArrayWrapper;
exports.default = _default;
//# sourceMappingURL=inputArrayWrapper.js.map