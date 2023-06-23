"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _arrayFieldWrapper = require("./styled/arrayFieldWrapper");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ArrayField = _ref => {
  let {
    title,
    values
  } = _ref;
  return (0, _jsxRuntime.jsxs)(_arrayFieldWrapper.ArrayFieldWrapper, {
    children: [(0, _jsxRuntime.jsx)("span", {
      children: title
    }), (0, _jsxRuntime.jsx)(_arrayFieldWrapper.FieldsContainerWrapper, {
      children: values.map(value => (0, _jsxRuntime.jsx)("p", {
        children: value
      }))
    })]
  });
};
var _default = ArrayField;
exports.default = _default;
//# sourceMappingURL=arrayField.js.map