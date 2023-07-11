"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const useInputFloatLabel = _ref => {
  let {
    onChange,
    isFloat
  } = _ref;
  const handleChangeInputText = (0, _react.useCallback)(e => {
    if (isFloat && /^[0-9]*(\.|,)?[0-9]*$/g.test(e.target.value)) {
      onChange(e.target.value);
    } else if (!isFloat) {
      onChange(e.target.value);
    }
  }, [isFloat, onChange]);
  return {
    handleChangeInputText
  };
};
var _default = useInputFloatLabel;
exports.default = _default;
//# sourceMappingURL=useInputFloatLabel.js.map