"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _arrayFieldWrapper = require("./styled/arrayFieldWrapper");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ArrayField = _ref => {
  let {
    title,
    values
  } = _ref;
  return _react.default.createElement(_arrayFieldWrapper.ArrayFieldWrapper, null, _react.default.createElement("span", null, title), _react.default.createElement(_arrayFieldWrapper.FieldsContainerWrapper, null, values.map(value => _react.default.createElement("p", null, value))));
};
var _default = ArrayField;
exports.default = _default;
//# sourceMappingURL=arrayField.js.map