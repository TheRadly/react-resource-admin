"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const useInputArray = _ref => {
  let {
    values,
    onChange
  } = _ref;
  const [chipsValues, setChipsValues] = (0, _react.useState)([]);
  const handleChangeChipsValues = (0, _react.useCallback)(_ref2 => {
    let {
      value
    } = _ref2;
    setChipsValues(value);
    onChange(value);
  }, [onChange, setChipsValues]);
  (0, _react.useEffect)(() => {
    if (values && values.length >= 1) {
      setChipsValues(values);
    }
  }, [values, setChipsValues]);
  return {
    chipsValues,
    handleChangeChipsValues
  };
};
var _default = useInputArray;
exports.default = _default;
//# sourceMappingURL=useInputArray.js.map