"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const DropdownInputWrapper = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: ", " !important;\n\n  & > label {\n    font-size: 12px;\n    line-height: 12px;\n    color: var(--surface-600);\n    font-weight: 400;\n    font-family: var(--font-family);\n    text-transform: capitalize;\n  }\n\n  & > div {\n    width: 100%;\n  }\n"])), props => props.fullWidth ? "100%" : "50%");
var _default = DropdownInputWrapper;
exports.default = _default;
//# sourceMappingURL=dropdownInputWrapper.js.map