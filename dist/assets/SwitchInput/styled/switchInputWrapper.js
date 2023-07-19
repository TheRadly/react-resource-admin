"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const SwitchInputWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 10px;\n  width: ", ";\n\n  & > label {\n    font-size: 12px;\n    line-height: 12px;\n    color: var(--surface-600);\n    font-weight: 400;\n    font-family: var(--font-family);\n    text-transform: capitalize;\n  }\n\n  span[class*=\"p-inputswitch-slider\"] {\n    border-radius: 6px !important;\n\n    &::before {\n      border-radius: 6px !important;\n    }\n  }\n"])), props => props.fullWidth ? "100%" : "50%");
var _default = SwitchInputWrapper;
exports.default = _default;
//# sourceMappingURL=switchInputWrapper.js.map