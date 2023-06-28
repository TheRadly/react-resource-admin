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
    createLabel,
    handleChangeField
  } = _ref;
  const {
    setFieldValue,
    handleSubmit
  } = formHandler;
  const handleSetFieldValue = (0, _react.useCallback)((value, field) => {
    if (handleChangeField) {
      handleChangeField(field, value);
    } else {
      setFieldValue(field, value);
    }
  }, [handleChangeField, setFieldValue]);
  const submitButtonLabel = (0, _react.useMemo)(() => isEdit ? saveLabel : createLabel, [isEdit, saveLabel, createLabel]);
  return {
    handleSubmit,
    handleSetFieldValue,
    submitButtonLabel
  };
};
var _default = useResourceForm;
exports.default = _default;
//# sourceMappingURL=useResourceForm.js.map