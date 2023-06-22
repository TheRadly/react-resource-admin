"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _inputtext = require("primereact/inputtext");
var _useSearchInput = _interopRequireDefault(require("./talons/useSearchInput"));
var _staticTexts = require("../../staticTexts");
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
  return _react.default.createElement("div", {
    className: "p-input-icon-left"
  }, _react.default.createElement("i", {
    className: _staticTexts.SEARCH_ICON
  }), _react.default.createElement(_inputtext.InputText, {
    onKeyDownCapture: handleKeyUp,
    type: _staticTexts.SEARCH_INPUT,
    onInput: onChange,
    placeholder: placeholder
  }));
};
var _default = SearchInput;
exports.default = _default;
//# sourceMappingURL=searchInput.js.map