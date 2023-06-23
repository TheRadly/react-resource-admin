"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _typenameIdFilter = _interopRequireDefault(require("../../../utils/typenameIdFilter"));
var _useForm = _interopRequireDefault(require("../../ResourceForm/talons/useForm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useResourceInputsQueryForm = _ref => {
  let {
    extraFormCruds,
    item,
    handleCloseQueryContainer,
    filterItems,
    saveLabel,
    createLabel
  } = _ref;
  const {
    createQuery,
    updateQuery,
    id
  } = (0, _react.useMemo)(() => extraFormCruds || {}, [extraFormCruds]);
  const {
    handleSubmit,
    setFieldValue,
    formValues,
    formHandler
  } = (0, _useForm.default)({
    initialValues: (0, _typenameIdFilter.default)({
      ...item
    }),
    onSubmitMethod: val => onSubmitInputs(val)
  });
  const [createValue, {
    loading: createLoading
  }] = createQuery();
  const [updateValue, {
    loading: updateLoading
  }] = updateQuery();
  (0, _react.useEffect)(() => {
    if (item) {
      const filteredBalance = (0, _typenameIdFilter.default)({
        ...item
      });
      formHandler.setValues(filteredBalance, false);
    }
  }, [formHandler, item]);
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