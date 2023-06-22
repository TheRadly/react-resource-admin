"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const useSearchInput = _ref => {
  let {
    onChange
  } = _ref;
  const handleKeyUp = (0, _react.useCallback)(e => {
    if (e.code === "Enter" && onChange) {
      onChange(e);
    }
  }, [onChange]);
  return {
    handleKeyUp
  };
};
var _default = useSearchInput;
exports.default = _default;
//# sourceMappingURL=useSearchInput.js.map