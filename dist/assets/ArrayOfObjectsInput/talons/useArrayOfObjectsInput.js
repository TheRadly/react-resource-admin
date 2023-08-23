"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const AMOUNT = "amount";
const useArrayOfObjectsInput = _ref => {
  let {
    initialValue,
    values,
    itemTitledBy,
    onChange
  } = _ref;
  const [objectOfArray, setObjectOfArray] = (0, _react.useState)(initialValue);
  const arrayOfItems = (0, _react.useMemo)(() => values.map(item => Object.keys(item[itemTitledBy])[0] || Object.keys(item)[0]), [itemTitledBy, values]);
  const arrayOfFields = (0, _react.useMemo)(() => Object.keys(objectOfArray).map(key => {
    const defaultData = {
      field: key,
      value: objectOfArray[key]
    };
    if (key === AMOUNT) {
      return {
        ...defaultData,
        value: objectOfArray[key].toString(),
        isFloat: true
      };
    }
    return defaultData;
  }), [objectOfArray]);
  const handleChangeFieldValue = (0, _react.useCallback)((field, data) => setObjectOfArray({
    ...objectOfArray,
    [field]: data
  }), [objectOfArray]);
  const handleSetFieldsData = (0, _react.useCallback)(() => {
    const mutatedArr = [...values, objectOfArray];
    onChange(mutatedArr);
    setObjectOfArray(initialValue);
  }, [objectOfArray, onChange, values, initialValue]);
  return {
    arrayOfFields,
    arrayOfItems,
    handleChangeFieldValue,
    handleSetFieldsData
  };
};
var _default = useArrayOfObjectsInput;
exports.default = _default;
//# sourceMappingURL=useArrayOfObjectsInput.js.map