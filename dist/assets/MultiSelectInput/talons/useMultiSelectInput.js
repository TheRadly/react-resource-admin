"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const useMultiSelectInput = _ref => {
  let {
    onChange
  } = _ref;
  const [selectedOption, setSelectedOption] = (0, _react.useState)(null);
  const handleChangeMultiSelect = (0, _react.useCallback)(_ref2 => {
    let {
      value
    } = _ref2;
    setSelectedOption(value);
    onChange(value);
  }, [setSelectedOption, onChange]);
  return {
    handleChangeMultiSelect,
    selectedOption
  };
};
var _default = useMultiSelectInput;
exports.default = _default;
//# sourceMappingURL=useMultiSelectInput.js.map