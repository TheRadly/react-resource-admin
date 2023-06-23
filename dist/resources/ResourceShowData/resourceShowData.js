"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _resourceShowDataWrapper = _interopRequireDefault(require("./styled/resourceShowDataWrapper"));
var _ShowField = _interopRequireDefault(require("../../assets/ShowField"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceShowData = _ref => {
  let {
    values,
    emptyLabel,
    arrayTitle
  } = _ref;
  return (0, _jsxRuntime.jsx)(_resourceShowDataWrapper.default, {
    children: values.map(item => (0, _jsxRuntime.jsx)(_ShowField.default, {
      arrayTitle: arrayTitle,
      emptyLabel: emptyLabel,
      label: item.field,
      item: item
    }, item.field))
  });
};
var _default = ResourceShowData;
exports.default = _default;
//# sourceMappingURL=resourceShowData.js.map