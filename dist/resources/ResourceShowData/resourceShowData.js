"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _resourceShowDataWrapper = _interopRequireDefault(require("./styled/resourceShowDataWrapper"));
var _ShowField = _interopRequireDefault(require("../../assets/ShowField"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceShowData = _ref => {
  let {
    values,
    emptyLabel,
    arrayTitle
  } = _ref;
  return _react.default.createElement(_resourceShowDataWrapper.default, null, values.map(item => _react.default.createElement(_ShowField.default, {
    arrayTitle: arrayTitle,
    emptyLabel: emptyLabel,
    label: item.field,
    key: item.field,
    item: item
  })));
};
var _default = ResourceShowData;
exports.default = _default;
//# sourceMappingURL=resourceShowData.js.map