"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const useTextAreaInput = _ref => {
  let {
    onChange
  } = _ref;
  const handleChangeTextAreaInput = (0, _react.useCallback)(e => {
    onChange(e.target.value);
  }, [onChange]);
  return {
    handleChangeTextAreaInput
  };
};
var _default = useTextAreaInput;
exports.default = _default;
//# sourceMappingURL=useTextAreaInput.js.map