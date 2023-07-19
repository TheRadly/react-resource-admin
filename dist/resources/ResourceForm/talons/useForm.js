"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _formik = require("formik");
var _react = require("react");
var _typenameIdFilter = _interopRequireDefault(require("../../../utils/typenameIdFilter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useForm = _ref => {
  let {
    initialValues = null,
    onSubmitMethod,
    valuesForEdit,
    omitValuesForEdit
  } = _ref;
  const form = (0, _formik.useFormik)({
    initialValues: (0, _typenameIdFilter.default)(initialValues || {}),
    onSubmit: onSubmitMethod
  });
  const {
    values: formValues,
    setFieldValue,
    handleSubmit
  } = form;
  (0, _react.useEffect)(() => {
    if (valuesForEdit && !initialValues) {
      const filteredValues = (0, _typenameIdFilter.default)({
        ...valuesForEdit
      }, omitValuesForEdit && [...omitValuesForEdit]);
      form.setValues(filteredValues);
    }
  }, [form, initialValues, omitValuesForEdit, valuesForEdit]);
  const values = (0, _react.useMemo)(() => Object.keys(formValues).map(field => ({
    field,
    value: formValues[field]
  })), [formValues]);
  const handleChangeField = (0, _react.useCallback)((value, field) => {
    setFieldValue(field, value);
  }, [setFieldValue]);
  return {
    formHandler: form,
    formValues,
    values,
    setFieldValue,
    handleChangeField,
    handleSubmit
  };
};
var _default = useForm;
exports.default = _default;
//# sourceMappingURL=useForm.js.map