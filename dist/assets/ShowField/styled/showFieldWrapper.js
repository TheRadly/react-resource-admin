"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ShowFieldWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  word-wrap: break-word;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n  gap: 5px;\n  border-bottom: 1px solid var(--clr-borderColor);\n  font-weight: 400 !important;\n  color: var(--clr-fontColor);\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  & > span:first-child {\n    font-size: 12px;\n    color: var(--clr-blackFontColor);\n  }\n"])));
var _default = ShowFieldWrapper;
exports.default = _default;
//# sourceMappingURL=showFieldWrapper.js.map