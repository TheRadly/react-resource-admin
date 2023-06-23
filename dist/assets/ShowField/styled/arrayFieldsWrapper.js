"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayFieldsWrapper = exports.ArrayFieldWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ArrayFieldsWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: fit-content;\n  padding: 10px;\n  margin-top: 5px;\n  border: 1px solid var(--clr-borderColor);\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n"])));
exports.ArrayFieldsWrapper = ArrayFieldsWrapper;
const ArrayFieldWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid var(--clr-borderColor);\n  padding-right: 10px;\n\n  &:last-child {\n    border-right: 0;\n    padding-right: 0;\n  }\n\n  & > p {\n    margin: 0;\n    margin-bottom: 5px;\n    font-size: 12px;\n    color: var(--clr-blackFontColor);\n  }\n"])));
exports.ArrayFieldWrapper = ArrayFieldWrapper;
//# sourceMappingURL=arrayFieldsWrapper.js.map