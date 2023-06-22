"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const PaginatorWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  button[class*=\"p-highlight\"] {\n    background: var(--clr-tableActiveColor) !important;\n    color: var(--clr-white) !important;\n  }\n"])));
var _default = PaginatorWrapper;
exports.default = _default;
//# sourceMappingURL=paginatorWrapper.js.map