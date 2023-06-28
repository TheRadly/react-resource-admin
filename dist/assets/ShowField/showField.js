"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _showFieldWrapper = _interopRequireDefault(require("./styled/showFieldWrapper"));
var _image = require("primereact/image");
var _imageWrapper = _interopRequireDefault(require("./styled/imageWrapper"));
var _useShowField = _interopRequireDefault(require("./talons/useShowField"));
var _react = require("react");
var _arrayFieldsWrapper = require("./styled/arrayFieldsWrapper");
var _arrayField = _interopRequireDefault(require("./arrayField"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LOGO = "logo";
const ShowField = _ref => {
  let {
    item,
    label,
    arrayTitle,
    emptyLabel
  } = _ref;
  const {
    value,
    field,
    isArray
  } = item;
  const {
    correctValue,
    parsedArrayValues
  } = (0, _useShowField.default)({
    value,
    isArray,
    arrayTitle,
    emptyLabel
  });
  return (0, _jsxRuntime.jsxs)(_showFieldWrapper.default, {
    children: [(0, _jsxRuntime.jsx)("span", {
      children: label
    }), isArray && field !== LOGO && (Array.isArray(parsedArrayValues) ? (0, _jsxRuntime.jsx)(_arrayFieldsWrapper.ArrayFieldsWrapper, {
      children: parsedArrayValues.map(_ref2 => {
        let {
          field: pF,
          value: pV,
          title: pT
        } = _ref2;
        return (0, _jsxRuntime.jsxs)(_arrayFieldsWrapper.ArrayFieldWrapper, {
          children: [(0, _jsxRuntime.jsx)("p", {
            children: pF
          }), (0, _jsxRuntime.jsx)(_arrayField.default, {
            title: pT,
            values: pV
          })]
        });
      })
    }) : parsedArrayValues), !isArray && field !== LOGO && (Array.isArray(correctValue) ? (0, _jsxRuntime.jsx)(_arrayFieldsWrapper.ArrayFieldsWrapper, {
      children: correctValue.map(cv => (0, _jsxRuntime.jsxs)(_arrayFieldsWrapper.ArrayFieldWrapper, {
        children: [(0, _jsxRuntime.jsx)("p", {
          children: cv.field
        }), (0, _jsxRuntime.jsx)("span", {
          children: cv.value
        })]
      }))
    }) : correctValue), field === LOGO && (0, _jsxRuntime.jsx)(_imageWrapper.default, {
      children: (0, _jsxRuntime.jsx)(_image.Image, {
        src: value,
        alt: field,
        width: "150",
        preview: true
      })
    })]
  });
};
var _default = (0, _react.memo)(ShowField);
exports.default = _default;
//# sourceMappingURL=showField.js.map