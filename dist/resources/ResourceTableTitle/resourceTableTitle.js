"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _resourceTableTitleWrapper = _interopRequireDefault(require("./styled/resourceTableTitleWrapper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceTableTitle = _ref => {
  let {
    children
  } = _ref;
  return _react.default.createElement(_resourceTableTitleWrapper.default, null, children);
};
var _default = ResourceTableTitle;
exports.default = _default;
//# sourceMappingURL=resourceTableTitle.js.map