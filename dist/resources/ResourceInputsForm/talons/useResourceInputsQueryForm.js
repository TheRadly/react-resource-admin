"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _useForm = _interopRequireDefault(require("../../ResourceForm/talons/useForm"));
var _config = require("../config");
var _helpers = require("../helpers");
var _lodash = require("lodash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const defaultRefetchVariables = {
  input: {
    pagination: {
      page: 0,
      limit: 10
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
    id,
    loading,
    parentType,
    refetchDocument,
    externalValues
  } = (0, _react.useMemo)(() => extraFormCruds || {}, [extraFormCruds]);
  const queryOptions = refetchDocument ? {
    refetchQueries: [{
      query: refetchDocument,
      variables: defaultRefetchVariables
    }]
  } : null;
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
        }
      });
    } else {
      createValue({
        variables: {
          input: (0, _helpers.getCorrectExtraFormSubmitValues)(val, parentType)
        }
      });
    }
    if (handleCloseQueryContainer) {
      handleCloseQueryContainer();
    }
  }, [updateValue, createValue, item, id, handleCloseQueryContainer, parentType]);
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
    if (parentType && parentType === _config.LOYALTY_LEVEL && dynamicalInputs) {
      if ((formValues === null || formValues === void 0 ? void 0 : formValues.type) !== "") {
        const selectedDynamicalInput = dynamicalInputs.find(dynamicalInput => dynamicalInput.type === (formValues === null || formValues === void 0 ? void 0 : formValues.type));
        if (selectedDynamicalInput) {
          dynamicalInputs.forEach(dynamicalInput => {
            if (dynamicalInput.type !== (formValues === null || formValues === void 0 ? void 0 : formValues.type)) {
              dynamicalInput.inputs.forEach(currentInput => {
                if ((0, _lodash.has)(formValues, currentInput)) {
                  formHandler.setFieldValue(currentInput, undefined);
                }
              });
            }
          });
          selectedDynamicalInput === null || selectedDynamicalInput === void 0 ? void 0 : selectedDynamicalInput.inputs.forEach(input => {
            if (!(0, _lodash.has)(formValues, input)) {
              formHandler.setFieldValue(input, (item === null || item === void 0 ? void 0 : item[input]) || "");
            }
          });
        }
      }
    }
  }, [parentType, formValues, dynamicalInputs, item]);
  const parsedValues = (0, _react.useMemo)(() => Object.keys(formValues).map(field => ({
    field,
    value: formValues[field]
  })), [formValues]);
  const arrayOfValues = (0, _react.useMemo)(() => parsedValues.map(pv => {
    if (parentType === _config.LOYALTY_LEVEL) {
      if (pv.field === _config.TYPE) {
        var _dropdownTypeValues$f;
        const dropdownTypeValues = Object.keys(_config.LoyaltyRewardTypeEnums).map(key => ({
          name: key,
          code: _config.LoyaltyRewardTypeEnums[key]
        }));
        return {
          ...pv,
          ...(item ? {
            activeValue: {
              name: (_dropdownTypeValues$f = dropdownTypeValues.find(value => value.code === pv.value)) === null || _dropdownTypeValues$f === void 0 ? void 0 : _dropdownTypeValues$f.name,
              code: pv.value
            }
          } : null),
          value: dropdownTypeValues
        };
      } else if (pv.field === _config.CASHBACK_PERCENT || pv.field === _config.DEPOSIT_LIMIT || pv.field === _config.WITHDRAW_LIMIT) {
        var _pv$value;
        return item ? {
          ...pv,
          isFloat: true,
          value: typeof pv.value === "string" ? pv.value : ((_pv$value = pv.value) === null || _pv$value === void 0 ? void 0 : _pv$value.toString()) || ""
        } : {
          ...pv,
          isFloat: true
        };
      } else if (pv.field === _config.LOYALTY_LEVEL_ID) {
        return {
          ...item,
          isDisabled: true
        };
      } else if (pv.field === _config.BONUS_ID) {
        const bonusesValues = externalValues === null || externalValues === void 0 ? void 0 : externalValues.bonuses.map(bonus => ({
          name: bonus.name,
          code: bonus.id
        }));
        return {
          ...pv,
          ...(item ? {
            activeValue: bonusesValues === null || bonusesValues === void 0 ? void 0 : bonusesValues.find(bonus => bonus.code === pv.value)
          } : null),
          value: bonusesValues
        };
      }
    }
    return pv;
  }), [parsedValues, parentType, item, externalValues === null || externalValues === void 0 ? void 0 : externalValues.bonuses]);
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