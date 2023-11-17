"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _useForm = _interopRequireDefault(require("../../ResourceForm/talons/useForm"));
var _helpers = require("../helpers");
var _config = require("../config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const defaultRefetchVariables = {
  input: {
    pagination: {
      page: 0,
      limit: 100
    }
  }
};
const useResourceInputsQueryForm = _ref => {
  let {
    extraFormCruds,
    item,
    handleCloseQueryContainer,
    saveLabel,
    createLabel
  } = _ref;
  const {
    initialValues,
    dynamicalInputs,
    createQuery,
    updateQuery,
    loading,
    parentType,
    refetchDocument,
    successAction,
    externalValues
  } = (0, _react.useMemo)(() => extraFormCruds || {}, [extraFormCruds]);
  const queryOptions = (0, _react.useMemo)(() => refetchDocument ? {
    refetchQueries: [{
      query: refetchDocument,
      variables: defaultRefetchVariables
    }]
  } : null, [refetchDocument]);
  const [createValue, {
    loading: createLoading
  }] = createQuery(queryOptions);
  const [updateValue, {
    loading: updateLoading
  }] = updateQuery(queryOptions);
  const onSubmitInputs = (0, _react.useCallback)(val => {
    if (item) {
      updateValue({
        variables: {
          input: {
            id: item === null || item === void 0 ? void 0 : item.id,
            update: (0, _helpers.removeExtraFormItemId)((0, _helpers.getCorrectExtraFormSubmitValues)(val, parentType), parentType)
          }
        },
        onCompleted: args => {
          if (successAction) successAction(args);
        }
      });
    } else {
      createValue({
        variables: {
          input: (0, _helpers.getCorrectExtraFormSubmitValues)(val, parentType)
        },
        onCompleted: args => {
          if (successAction) successAction(args);
        }
      });
    }
    if (handleCloseQueryContainer) {
      handleCloseQueryContainer();
    }
  }, [item, handleCloseQueryContainer, updateValue, parentType, successAction, createValue]);
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
    formValues,
    formHandler
  } = (0, _useForm.default)(formOptions);
  (0, _react.useEffect)(() => {
    (0, _helpers.prepareDynamicalFieldsByFormType)({
      parentType,
      dynamicalInputs,
      formHandler,
      formValues,
      item
    });
  }, [parentType, formValues, dynamicalInputs, item]);
  const parsedValues = (0, _react.useMemo)(() => Object.keys(formValues).map(field => ({
    field,
    value: formValues[field]
  })), [formValues]);
  const arrayOfValues = (0, _react.useMemo)(() => parsedValues.filter(pvFilter => !_config.DISABLED_IDS.includes(pvFilter.field)).map(pv => (0, _helpers.customizeFieldInputs)({
    pv,
    parentType,
    item,
    externalValues
  })), [parsedValues, parentType, item, externalValues]);
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