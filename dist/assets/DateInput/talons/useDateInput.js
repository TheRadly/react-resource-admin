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
    var _e$value;
    const date = (_e$value = e.value) === null || _e$value === void 0 ? void 0 : _e$value.toString();
    if (date) {
      const correctDate = new Date(date).toISOString();
      onChange(correctDate);
    }
  }, [onChange]);
  return {
    handleChangeDateInput
  };
};
var _default = useDateInput;
exports.default = _default;
//# sourceMappingURL=useDateInput.js.map