"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ResourceTableSearchWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  gap: 10px;\n\n  & > span {\n    width: 50px;\n    margin-bottom: 0;\n  }\n\n  span[class*=\"p-dropdown-label p-inputtext\"] {\n    padding: 0.5rem 0.75rem;\n  }\n\n  div[class*=\"p-inputswitch p-component\"] {\n    width: 100% !important;\n\n    div {\n      width: 100%;\n    }\n  }\n\n  div {\n    width: 100%;\n\n    & > input {\n      padding: 0.5rem 0.75rem;\n    }\n  }\n\n  @media (min-width: 961px) {\n    justify-content: flex-end;\n\n    div {\n      width: unset;\n    }\n  }\n"])));
var _default = ResourceTableSearchWrapper;
exports.default = _default;
//# sourceMappingURL=resourceTableSearchWrapper.js.map