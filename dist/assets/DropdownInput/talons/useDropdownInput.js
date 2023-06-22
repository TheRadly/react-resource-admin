"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const useDropdownInput = _ref => {
  let {
    onChange
  } = _ref;
  const [selectedDropdown, setSelectedDropdown] = (0, _react.useState)(null);
  const handleChangeValue = (0, _react.useCallback)(_ref2 => {
    let {
      value
    } = _ref2;
    setSelectedDropdown(value);
    onChange(value.code);
  }, [setSelectedDropdown, onChange]);
  return {
    selectedDropdown,
    handleChangeValue
  };
};
var _default = useDropdownInput;
exports.default = _default;
//# sourceMappingURL=useDropdownInput.js.map