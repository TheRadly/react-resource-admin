"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _ResourceShowData = _interopRequireDefault(require("../ResourceShowData"));
var _ResourceShowToolbar = _interopRequireDefault(require("../ResourceShowToolbar"));
var _resourceShowContainerWrapper = _interopRequireDefault(require("./styled/resourceShowContainerWrapper"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceShowContainer = _ref => {
  let {
    values,
    title,
    enabled,
    emptyLabel,
    arrayTitle,
    editLabel,
    deleteLabel,
    onDelete,
    onEdit,
    deleteConfirmMessage
  } = _ref;
  return (0, _jsxRuntime.jsxs)(_resourceShowContainerWrapper.default, {
    children: [(0, _jsxRuntime.jsx)(_ResourceShowToolbar.default, {
      editLabel: editLabel,
      deleteLabel: deleteLabel,
      onDelete: onDelete,
      onEdit: onEdit,
      deleteConfirmMessage: deleteConfirmMessage,
      title: title,
      enabled: enabled
    }), (0, _jsxRuntime.jsx)(_ResourceShowData.default, {
      arrayTitle: arrayTitle,
      emptyLabel: emptyLabel,
      values: values
    })]
  });
};
var _default = ResourceShowContainer;
exports.default = _default;
//# sourceMappingURL=resourceShowContainer.js.map