"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const useResourceInputsForm = () => {
  const [isShowQueryContainer, setShowQueryContainer] = (0, _react.useState)(false);
  const [queryFormItem, setQueryFormItem] = (0, _react.useState)(null);
  const handleShowQueryContainer = (0, _react.useCallback)(item => {
    if (item) {
      setQueryFormItem(item);
    }
    setShowQueryContainer(prev => !prev);
  }, [setQueryFormItem, setShowQueryContainer]);
  const handleCloseQueryContainer = (0, _react.useCallback)(() => {
    setShowQueryContainer(false);
  }, [setShowQueryContainer]);
  return {
    handleCloseQueryContainer,
    queryFormItem,
    isShowQueryContainer,
    handleShowQueryContainer
  };
};
var _default = useResourceInputsForm;
exports.default = _default;
//# sourceMappingURL=useResourceInputsForm.js.map