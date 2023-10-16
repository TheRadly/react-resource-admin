"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _useForm = _interopRequireDefault(require("../../ResourceForm/talons/useForm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useResourceInputsQueryForm = _ref => {
  let {
    extraFormCruds,
    item,
    handleCloseQueryContainer,
    filterItems
  } = _ref;
  const {
    initialValues,
    createQuery,
    updateQuery,
    id,
    loading,
    saveLabel,
    createLabel
  } = (0, _react.useMemo)(() => extraFormCruds || {}, [extraFormCruds]);
  const [createValue, {
    loading: createLoading
  }] = createQuery();
  const [updateValue, {
    loading: updateLoading
  }] = updateQuery();
  const onSubmitInputs = (0, _react.useCallback)(val => {
    if (item) {
      updateValue({
        variables: {
          input: {
            id,
            update: {
              ...val
            }
          }
        }
      });
    } else {
      createValue({
        variables: {
          input: val
        }
      });
    }
    if (handleCloseQueryContainer) {
      handleCloseQueryContainer();
    }
  }, [updateValue, createValue, item, id, handleCloseQueryContainer]);
  const formOptions = (0, _react.useMemo)(() => item ? {
    valuesForEdit: item,
    onSubmitMethod: onSubmitInputs,
    loading
  } : {
    initialValues,
    onSubmitMethod: onSubmitInputs
  }, [initialValues, item, loading, onSubmitInputs]);
  const {
    handleSubmit,
    setFieldValue,
    formValues
  } = (0, _useForm.default)(formOptions);
  const parsedValues = (0, _react.useMemo)(() => Object.keys(formValues).map(field => ({
    field,
    value: formValues[field]
  })), [formValues]);
  const arrayOfValues = (0, _react.useMemo)(() => parsedValues.map(pv => {
    const item = filterItems === null || filterItems === void 0 ? void 0 : filterItems.find(item => item.field === pv.field);
    if (item) {
      return {
        ...pv,
        ...item
      };
    }
    return pv;
  }), [filterItems, parsedValues]);
  const handleChangeField = (0, _react.useCallback)((value, field) => {
    setFieldValue(field, value);
  }, [setFieldValue]);
  const submitLocale = (0, _react.useMemo)(() => item ? saveLabel : createLabel, [item, saveLabel, createLabel]);
  return {
    loading: createLoading || updateLoading,
    handleSubmit,
    arrayOfValues,
    handleChangeField,
    submitLocale
  };
};
var _default = useResourceInputsQueryForm;
exports.default = _default;
//# sourceMappingURL=useResourceInputsQueryForm.js.map