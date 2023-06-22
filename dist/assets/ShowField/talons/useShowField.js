"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _staticTexts = require("../../../staticTexts");
var _react = require("react");
const useShowField = _ref => {
  let {
    value,
    isArray,
    arrayTitle,
    emptyLabel
  } = _ref;
  const checkOnObject = (0, _react.useMemo)(() => typeof value === "object" ? Object.keys(value).filter(key => key !== _staticTexts.TYPENAME).map(key => ({
    field: key,
    value: value[key]
  })) : value, [value]);
  const correctValue = (0, _react.useMemo)(() => Array.isArray(value) && !value.length ? emptyLabel : checkOnObject, [emptyLabel, value, checkOnObject]);
  const parsedArrayValues = isArray && value.length ? value.map(item => {
    if (item.path) {
      return {
        title: arrayTitle,
        field: item.path,
        value: item.fields
      };
    }
    return item;
  }) : emptyLabel;
  return {
    correctValue,
    parsedArrayValues
  };
};
var _default = useShowField;
exports.default = _default;
//# sourceMappingURL=useShowField.js.map