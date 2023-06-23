"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ResourceInputsFormWrapper = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n\n  & > span {\n    width: 100%;\n\n    & > span {\n      width: 100%;\n    }\n  }\n"])));
var _default = ResourceInputsFormWrapper;
exports.default = _default;
//# sourceMappingURL=resourceInputsFormWrapper.js.map