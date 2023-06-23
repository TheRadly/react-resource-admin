"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _inputtext = require("primereact/inputtext");
var _useSearchInput = _interopRequireDefault(require("./talons/useSearchInput"));
var _staticTexts = require("../../staticTexts");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SearchInput = _ref => {
  let {
    placeholder,
    onChange
  } = _ref;
  const {
    handleKeyUp
  } = (0, _useSearchInput.default)({
    onChange
  });
  return (0, _jsxRuntime.jsxs)("div", {
    className: "p-input-icon-left",
    children: [(0, _jsxRuntime.jsx)("i", {
      className: _staticTexts.SEARCH_ICON
    }), (0, _jsxRuntime.jsx)(_inputtext.InputText, {
      onKeyDownCapture: handleKeyUp,
      type: _staticTexts.SEARCH_INPUT,
      onInput: onChange,
      placeholder: placeholder
    })]
  });
};
var _default = SearchInput;
exports.default = _default;
//# sourceMappingURL=searchInput.js.map