"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const SwitchInnerWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n\n  span {\n    font-size: 16px;\n    font-weight: 400;\n    color: var(--text-color);\n    font-family: var(--font-family);\n    text-transform: capitalize;\n  }\n"])));
var _default = SwitchInnerWrapper;
exports.default = _default;
//# sourceMappingURL=switchInnerWrapper.js.map