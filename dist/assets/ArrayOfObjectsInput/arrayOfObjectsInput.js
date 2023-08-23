"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _button = require("primereact/button");
var _UniversalInput = _interopRequireDefault(require("../UniversalInput"));
var _arrayOfObjectInputWrapper = require("./styled/arrayOfObjectInputWrapper");
var _useArrayOfObjectsInput = _interopRequireDefault(require("./talons/useArrayOfObjectsInput"));
var _staticTexts = require("../../staticTexts");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ArrayOfObjectsInput = _ref => {
  let {
    label,
    values,
    fullWidth,
    initialValue,
    itemTitledBy,
    onChange,
    emptyMessage,
    disabled
  } = _ref;
  const {
    arrayOfFields,
    arrayOfItems,
    handleChangeFieldValue,
    handleSetFieldsData
  } = (0, _useArrayOfObjectsInput.default)({
    onChange,
    initialValue,
    values,
    itemTitledBy
  });
  return (0, _jsxRuntime.jsxs)(_arrayOfObjectInputWrapper.ArrayOfObjectsInputWrapper, {
    fullWidth: fullWidth,
    children: [label && (0, _jsxRuntime.jsx)("label", {
      htmlFor: label,
      children: label
    }), (0, _jsxRuntime.jsx)(_arrayOfObjectInputWrapper.ArrayOfObjectsItems, {
      children: arrayOfItems.length ? arrayOfItems.map((item, index) => (0, _jsxRuntime.jsxs)("div", {
        children: [(0, _jsxRuntime.jsxs)("span", {
          children: [index, "."]
        }), (0, _jsxRuntime.jsx)("div", {
          children: Object.keys(item).map(key => (0, _jsxRuntime.jsxs)("div", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: key
            }), (0, _jsxRuntime.jsx)("span", {
              children: item[key]
            })]
          }))
        })]
      })) : (0, _jsxRuntime.jsx)("span", {
        children: emptyMessage
      })
    }), (0, _jsxRuntime.jsxs)(_arrayOfObjectInputWrapper.ArrayOfObjectsContainer, {
      children: [(0, _jsxRuntime.jsx)(_arrayOfObjectInputWrapper.ArrayOfObjectsInputsBox, {
        children: arrayOfFields.map(item => (0, _jsxRuntime.jsx)(_UniversalInput.default, {
          isArrayWithObjects: item.isArrayWithObjects,
          isMultiSelect: item.isMultiSelect,
          isArray: item.isArray,
          isDate: item.isDate,
          isDisabled: item.isDisabled,
          isJson: item.isJson,
          isMultiInput: item.isMultiInput,
          isTextArea: item.isTextArea,
          isFloat: item.isFloat,
          label: item.field,
          value: item.value,
          onChange: data => handleChangeFieldValue(item.field, data)
        }))
      }), (0, _jsxRuntime.jsx)(_button.Button, {
        type: "button",
        disabled: disabled,
        outlined: true,
        icon: _staticTexts.PLUS_ICON,
        onClick: handleSetFieldsData
      })]
    })]
  });
};
var _default = ArrayOfObjectsInput;
exports.default = _default;
//# sourceMappingURL=arrayOfObjectsInput.js.map