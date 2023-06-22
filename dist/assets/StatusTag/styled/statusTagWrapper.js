"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const StatusTagWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  span[class*=\"p-tag p-component p-tag-info\"] {\n    background: var(--clr-hoverBackgroundColor) !important;\n  }\n\n  span[class*=\"p-tag p-component p-tag-danger\"] {\n    background: none !important;\n    color: var(--clr-hoverBackgroundColor) !important;\n    border: 1px solid var(--clr-hoverBackgroundColor) !important;\n  }\n"])));
var _default = StatusTagWrapper;
exports.default = _default;
//# sourceMappingURL=statusTagWrapper.js.map