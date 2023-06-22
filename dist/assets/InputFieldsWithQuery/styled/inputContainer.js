"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const InputContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n\n  button {\n    background: none !important;\n    border: 1px solid var(--clr-hoverBackgroundColor) !important;\n\n    span {\n      color: var(--clr-hoverBackgroundColor) !important;\n    }\n  }\n"])));
var _default = InputContainer;
exports.default = _default;
//# sourceMappingURL=inputContainer.js.map