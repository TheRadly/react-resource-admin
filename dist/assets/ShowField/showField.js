"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _showFieldWrapper = _interopRequireDefault(require("./styled/showFieldWrapper"));
var _image = require("primereact/image");
var _imageWrapper = _interopRequireDefault(require("./styled/imageWrapper"));
var _useShowField = _interopRequireDefault(require("./talons/useShowField"));
var _arrayFieldsWrapper = require("./styled/arrayFieldsWrapper");
var _arrayField = _interopRequireDefault(require("./arrayField"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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