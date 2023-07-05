"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const EditColumnWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  justify-content: center;\n\n  button[class*=\"p-button-rounded\"] {\n    padding: 5px !important;\n    width: unset;\n    height: unset !important;\n    opacity: 0.5;\n\n    &:hover {\n      opacity: 1;\n    }\n\n    & > span {\n      font-size: 8px !important;\n    }\n  }\n"])));
var _default = EditColumnWrapper;
exports.default = _default;
//# sourceMappingURL=editColumnWrapper.js.map