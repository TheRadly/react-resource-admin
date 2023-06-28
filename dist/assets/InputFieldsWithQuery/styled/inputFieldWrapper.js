"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const InputFieldWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 5px 10px;\n  color: var(--clr-fontColor);\n  background: var(--clr-whiteGrey);\n  border: 1px solid var(--clr-borderColor);\n  border-radius: 5px;\n\n  label {\n    font-family: var(--font-family);\n    text-transform: capitalize;\n    margin-bottom: 0;\n  }\n\n  span {\n    font-size: 14px;\n  }\n"])));
var _default = InputFieldWrapper;
exports.default = _default;
//# sourceMappingURL=inputFieldWrapper.js.map