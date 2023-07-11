"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const useDateInput = _ref => {
  let {
    onChange
  } = _ref;
  const handleChangeDateInput = (0, _react.useCallback)(e => {
    onChange(e.value);
  }, [onChange]);
  return {
    handleChangeDateInput
  };
};
var _default = useDateInput;
exports.default = _default;
//# sourceMappingURL=useDateInput.js.map