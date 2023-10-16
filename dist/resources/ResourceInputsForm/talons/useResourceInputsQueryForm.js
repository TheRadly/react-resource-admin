"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _useForm = _interopRequireDefault(require("../../ResourceForm/talons/useForm"));
var _config = require("../config");
var _lodash = require("lodash");
var _helpers = require("../helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useResourceInputsQueryForm = _ref => {
  let {
    extraFormCruds,
    item,
    handleCloseQueryContainer
  } = _ref;
  const {
    initialValues,
    createQuery,
    updateQuery,
    id,
    loading,
    saveLabel,
    createLabel,
    parentType
  } = (0, _react.useMemo)(() => extraFormCruds || {}, [extraFormCruds]);
  const [createValue, {
    loading: createLoading
  }] = createQuery();
  const [updateValue, {
    loading: updateLoading
  }] = updateQuery();
  const onSubmitInputs = (0, _react.useCallback)(val => {
    console.log(val);
    if (item) {
      updateValue({
        variables: {
          input: {
            id,
            data: (0, _helpers.getCorrectExtraFormSubmitValues)(val, parentType)
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
    if (parentType && parentType === _config.LOYALTY_LEVEL) {
      if ((formValues === null || formValues === void 0 ? void 0 : formValues.type) === _config.LOYALTY_LEVEL_REWARD_TYPES.BONUS && !(0, _lodash.has)(formValues, _config.BONUS_ID)) {
        formHandler.setFieldValue(_config.BONUS_ID, (item === null || item === void 0 ? void 0 : item.bonusId) || "");
      } else if ((formValues === null || formValues === void 0 ? void 0 : formValues.type) !== _config.LOYALTY_LEVEL_REWARD_TYPES.BONUS && (0, _lodash.has)(formValues, _config.BONUS_ID)) {
        formHandler.setFieldValue(_config.BONUS_ID, undefined);
      }
      if ((formValues === null || formValues === void 0 ? void 0 : formValues.type) === _config.LOYALTY_LEVEL_REWARD_TYPES.CASHBACK && !(0, _lodash.has)(formValues, _config.CASHBACK_PERCENT)) {
        formHandler.setFieldValue(_config.CASHBACK_PERCENT, (item === null || item === void 0 ? void 0 : item.cashbackPercent) || "");
      } else if ((formValues === null || formValues === void 0 ? void 0 : formValues.type) !== _config.LOYALTY_LEVEL_REWARD_TYPES.CASHBACK && (0, _lodash.has)(formValues, _config.CASHBACK_PERCENT)) {
        formHandler.setFieldValue(_config.CASHBACK_PERCENT, undefined);
      }
      if ((formValues === null || formValues === void 0 ? void 0 : formValues.type) === _config.LOYALTY_LEVEL_REWARD_TYPES.DEPOSIT_LIMIT && !(0, _lodash.has)(formValues, _config.DEPOSIT_LIMIT)) {
        formHandler.setFieldValue(_config.DEPOSIT_LIMIT, (item === null || item === void 0 ? void 0 : item.depositLimit) || "");
      } else if ((formValues === null || formValues === void 0 ? void 0 : formValues.type) !== _config.LOYALTY_LEVEL_REWARD_TYPES.DEPOSIT_LIMIT && (0, _lodash.has)(formValues, _config.DEPOSIT_LIMIT)) {
        formHandler.setFieldValue(_config.DEPOSIT_LIMIT, undefined);
      }
      if ((formValues === null || formValues === void 0 ? void 0 : formValues.type) === _config.LOYALTY_LEVEL_REWARD_TYPES.WITHDRAW_LIMIT && !(0, _lodash.has)(formValues, _config.WITHDRAW_LIMIT)) {
        formHandler.setFieldValue(_config.WITHDRAW_LIMIT, (item === null || item === void 0 ? void 0 : item.withdrawLimit) || "");
      } else if ((formValues === null || formValues === void 0 ? void 0 : formValues.type) !== _config.LOYALTY_LEVEL_REWARD_TYPES.WITHDRAW_LIMIT && (0, _lodash.has)(formValues, _config.WITHDRAW_LIMIT)) {
        formHandler.setFieldValue(_config.WITHDRAW_LIMIT, undefined);
      }
    }
  }, [parentType, formValues, item === null || item === void 0 ? void 0 : item.bonusId, item === null || item === void 0 ? void 0 : item.cashbackPercent, item === null || item === void 0 ? void 0 : item.depositLimit, item === null || item === void 0 ? void 0 : item.withdrawLimit]);
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
        return {
          ...pv,
          value: typeof pv.value === "string" ? pv.value : pv.value.toString(),
          isFloat: true
        };
      } else if (pv.field === _config.LOYALITY_LEVEL_ID) {
        return {
          ...item,
          isDisabled: true
        };
      }
    }
    return pv;
  }), [parsedValues, parentType, item]);
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