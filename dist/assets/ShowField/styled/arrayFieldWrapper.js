"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldsContainerWrapper = exports.ArrayFieldWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ArrayFieldWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-top: 1px solid var(--clr-borderColor);\n\n  & > span {\n    font-size: 12px;\n    color: var(--clr-blackFontColor);\n    margin: 5px 0;\n    font-family: var(--font-family);\n    text-transform: capitalize;\n  }\n"])));
exports.ArrayFieldWrapper = ArrayFieldWrapper;
const FieldsContainerWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  color: var(--clr-fontColor);\n\n  & > p {\n    margin: 0;\n  }\n"])));
exports.FieldsContainerWrapper = FieldsContainerWrapper;
//# sourceMappingURL=arrayFieldWrapper.js.map