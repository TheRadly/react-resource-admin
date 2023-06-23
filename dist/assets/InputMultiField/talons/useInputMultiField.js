"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const useInputMultiField = _ref => {
  let {
    onChange,
    values
  } = _ref;
  const [isInitializeContainer, setInitializeContainer] = (0, _react.useState)(false);
  const [valuesContainer, setValuesContainer] = (0, _react.useState)();
  const handleChangeInput = (0, _react.useCallback)((field, value) => {
    setValuesContainer(prev => ({
      ...prev,
      [field]: value
    }));
  }, [setValuesContainer]);
  (0, _react.useEffect)(() => {
    if (values !== null && values !== void 0 && values.length && !isInitializeContainer) {
      values.forEach(_ref2 => {
        let {
          field,
          value
        } = _ref2;
        return setValuesContainer(prev => ({
          ...prev,
          [field]: value
        }));
      });
      setInitializeContainer(true);
    }
  }, [values, isInitializeContainer]);
  (0, _react.useEffect)(() => {
    if (valuesContainer) {
      onChange(valuesContainer);
    }
  }, [onChange, valuesContainer]);
  return {
    handleChangeInput
  };
};
var _default = useInputMultiField;
exports.default = _default;
//# sourceMappingURL=useInputMultiField.js.map