"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _inputFieldsWithQueryWrapper = _interopRequireDefault(require("./inputFieldsWithQueryWrapper"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const InputFieldsWrapper = (0, _styledComponents.default)(_inputFieldsWithQueryWrapper.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  border: 1px solid #ced4da;\n  padding: 10px;\n  border-radius: 6px;\n  color: #495057;\n"])));
var _default = InputFieldsWrapper;
exports.default = _default;
//# sourceMappingURL=inputFieldsWrapper.js.map