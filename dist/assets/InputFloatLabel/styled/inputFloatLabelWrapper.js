"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const InputFloatLabelWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n  width: ", ";\n\n  & > label {\n    font-size: 14px;\n    color: var(--clr-blackFontColor);\n  }\n\n  & > span {\n    max-height: 45px !important;\n  }\n"])), props => props.fullWidth ? "100%" : "50%");
var _default = InputFloatLabelWrapper;
exports.default = _default;
//# sourceMappingURL=inputFloatLabelWrapper.js.map