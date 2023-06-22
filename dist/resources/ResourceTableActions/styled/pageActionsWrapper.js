"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const PageActionsWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n\n  button {\n    background: var(--clr-hoverBackgroundColor);\n    border-color: transparent;\n\n    &:focus {\n      box-shadow: none !important;\n    }\n\n    &:hover {\n      border-color: transparent !important;\n      background: var(--clr-backgroundColor-2) !important;\n    }\n  }\n"])));
var _default = PageActionsWrapper;
exports.default = _default;
//# sourceMappingURL=pageActionsWrapper.js.map