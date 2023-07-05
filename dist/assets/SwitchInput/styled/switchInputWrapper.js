"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const SwitchInputWrapper = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  color: var(--clr-blackFontColor);\n  margin-bottom: 10px;\n\n  & > label {\n    font-size: 12px;\n    line-height: 12px;\n    color: var(--surface-600);\n    font-weight: 400;\n    font-family: var(--font-family);\n    text-transform: capitalize;\n  }\n\n  div[class*=\"p-inputswitch-checked\"] {\n    span {\n      background: var(--clr-hoverBackgroundColor) !important;\n    }\n  }\n"])));
var _default = SwitchInputWrapper;
exports.default = _default;
//# sourceMappingURL=switchInputWrapper.js.map