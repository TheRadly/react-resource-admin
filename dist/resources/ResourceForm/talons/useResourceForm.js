"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const useResourceForm = _ref => {
  let {
    isEdit,
    formHandler,
    saveLabel,
    createLabel
  } = _ref;
  const {
    setFieldValue,
    handleSubmit
  } = formHandler;
  const handleChangeField = (0, _react.useCallback)((value, field) => {
    setFieldValue(field, value);
  }, [setFieldValue]);
  const submitButtonLabel = (0, _react.useMemo)(() => isEdit ? saveLabel : createLabel, [isEdit, saveLabel, createLabel]);
  return {
    handleSubmit,
    handleChangeField,
    submitButtonLabel
  };
};
var _default = useResourceForm;
exports.default = _default;
//# sourceMappingURL=useResourceForm.js.map