"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ResourceActionsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 5px;\n  padding: 10px 0;\n\n  button {\n    background: none !important;\n    border-color: var(--clr-hoverBackgroundColor) !important;\n    color: var(--clr-hoverBackgroundColor) !important;\n\n    &:hover {\n      background: var(--clr-hoverBackgroundColor) !important;\n      color: var(--clr-white) !important;\n    }\n  }\n"])));
var _default = ResourceActionsContainer;
exports.default = _default;
//# sourceMappingURL=resourceActionsContainer.js.map