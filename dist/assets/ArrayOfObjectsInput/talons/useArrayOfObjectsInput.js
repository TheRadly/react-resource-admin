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
  const [indexEditItem, setIndexEditItem] = (0, _react.useState)(null);
  const [isEditMode, setEditMode] = (0, _react.useState)(false);
  const [objectOfArray, setObjectOfArray] = (0, _react.useState)(initialValue);
  const arrayOfItems = (0, _react.useMemo)(() => itemTitledBy ? values.filter(item => Object.keys(item).some(key => key === itemTitledBy)) : values, [itemTitledBy, values]);
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
  const handleRemoveItem = (0, _react.useCallback)(propIndex => {
    if (values.length) {
      const newArray = values.filter((_, index) => index !== propIndex);
      onChange(newArray);
    }
  }, [onChange, values]);
  const handleEditItem = (0, _react.useCallback)((item, index) => {
    setEditMode(true);
    setObjectOfArray(item);
    setIndexEditItem(index);
  }, []);
  const handleSetEditedFieldData = (0, _react.useCallback)(() => {
    const newArray = values.filter((item, index) => item.id ? item.id !== objectOfArray.id : index !== indexEditItem);
    newArray.push(objectOfArray);
    onChange(newArray);
    setEditMode(false);
    setIndexEditItem(null);
    setObjectOfArray(initialValue);
  }, [indexEditItem, objectOfArray, values, onChange, initialValue]);
  return {
    isEditMode,
    arrayOfFields,
    arrayOfItems,
    handleChangeFieldValue,
    handleSetFieldsData,
    handleSetEditedFieldData,
    handleRemoveItem,
    handleEditItem
  };
};
var _default = useArrayOfObjectsInput;
exports.default = _default;
//# sourceMappingURL=useArrayOfObjectsInput.js.map