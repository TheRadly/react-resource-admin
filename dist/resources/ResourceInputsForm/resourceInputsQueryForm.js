"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _button = require("primereact/button");
var _LoaderSpinner = _interopRequireDefault(require("../../assets/LoaderSpinner"));
var _UniversalInput = _interopRequireDefault(require("../../assets/UniversalInput"));
var _buttonsWrapper = _interopRequireDefault(require("../ResourceForm/styled/buttonsWrapper"));
var _resourceInputsFormWrapper = _interopRequireDefault(require("../ResourceForm/styled/resourceInputsFormWrapper"));
var _useResourceInputsQueryForm = _interopRequireDefault(require("./talons/useResourceInputsQueryForm"));
var _staticTexts = require("../../staticTexts");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ResourceCrudQueryForm = _ref => {
  let {
    extraFormCruds,
    children,
    item,
    handleCloseQueryContainer
  } = _ref;
  const {
    loading,
    handleSubmit,
    arrayOfValues,
    handleChangeField,
    submitLocale
  } = (0, _useResourceInputsQueryForm.default)({
    extraFormCruds,
    item,
    handleCloseQueryContainer
  });
  return loading ? (0, _jsxRuntime.jsx)(_LoaderSpinner.default, {}) : (0, _jsxRuntime.jsxs)(_resourceInputsFormWrapper.default, {
    onSubmit: handleSubmit,
    children: [children || arrayOfValues.map(_ref2 => {
      let {
        field,
        value,
        isArray,
        isDisabled,
        isDate
      } = _ref2;
      return (0, _jsxRuntime.jsx)(_UniversalInput.default, {
        isDate: isDate,
        isDisabled: isDisabled,
        isArray: isArray,
        label: field,
        placeholder: field,
        disabled: loading,
        value: value,
        onChange: data => handleChangeField(data, field)
      });
    }), (0, _jsxRuntime.jsx)(_buttonsWrapper.default, {
      children: (0, _jsxRuntime.jsx)(_button.Button, {
        loading: loading,
        type: _staticTexts.SUBMIT_INPUT,
        children: submitLocale
      })
    })]
  });
};
var _default = (0, _react.memo)(ResourceCrudQueryForm);
exports.default = _default;
//# sourceMappingURL=resourceInputsQueryForm.js.map