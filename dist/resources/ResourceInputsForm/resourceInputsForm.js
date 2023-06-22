"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _useResourceInputsForm = _interopRequireDefault(require("./talons/useResourceInputsForm"));
var _resourceTableTitle = _interopRequireDefault(require("../ResourceTableTitle/resourceTableTitle"));
var _pageTitleWrapper = _interopRequireDefault(require("./styled/pageTitleWrapper"));
var _crudWrapper = _interopRequireDefault(require("./styled/crudWrapper"));
var _resourceInputsContainer = _interopRequireDefault(require("./styled/resourceInputsContainer"));
var _resourceInputsQueryForm = _interopRequireDefault(require("./resourceInputsQueryForm"));
var _resourceForm = _interopRequireDefault(require("../ResourceForm/resourceForm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ResourceInputsForm = _ref => {
  let {
    cancelLabel,
    saveLabel,
    createLabel,
    title,
    children,
    onCancel,
    loading,
    isEdit,
    values,
    extraFormCruds,
    handleChangeField,
    formHandler
  } = _ref;
  const {
    queryFormItem,
    isShowQueryContainer,
    handleShowQueryContainer,
    handleCloseQueryContainer
  } = (0, _useResourceInputsForm.default)();
  return _react.default.createElement(_crudWrapper.default, null, _react.default.createElement(_pageTitleWrapper.default, null, _react.default.createElement(_resourceTableTitle.default, null, title)), _react.default.createElement(_resourceInputsContainer.default, null, _react.default.createElement(_resourceForm.default, {
    cancelLabel: cancelLabel,
    saveLabel: saveLabel,
    createLabel: createLabel,
    handleChangeField: handleChangeField,
    formHandler: formHandler,
    extraFormCruds: extraFormCruds,
    loading: loading,
    values: values,
    isEdit: isEdit,
    isShowQueryContainer: isShowQueryContainer,
    handleShowQueryContainer: handleShowQueryContainer,
    onCancel: onCancel
  }, children), isShowQueryContainer && extraFormCruds && _react.default.createElement(_resourceInputsQueryForm.default, {
    item: queryFormItem,
    extraFormCruds: extraFormCruds,
    handleCloseQueryContainer: handleCloseQueryContainer
  })));
};
var _default = (0, _react.memo)(ResourceInputsForm);
exports.default = _default;
//# sourceMappingURL=resourceInputsForm.js.map