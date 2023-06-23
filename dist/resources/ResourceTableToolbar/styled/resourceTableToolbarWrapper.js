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
const ResourceTableToolbarWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-bottom: 20px;\n\n  div[class*=\"p-toolbar p-component\"] {\n    justify-content: center;\n    background: none;\n    border: 0;\n    padding: 0;\n    padding-bottom: 20px;\n    border-radius: 0;\n    border-bottom: 1px solid var(--gray-300);\n\n    @media (min-width: 961px) {\n      justify-content: space-between;\n    }\n  }\n"])));
var _default = ResourceTableToolbarWrapper;
exports.default = _default;
//# sourceMappingURL=resourceTableToolbarWrapper.js.map