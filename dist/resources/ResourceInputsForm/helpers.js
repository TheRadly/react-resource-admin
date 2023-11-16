"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeExtraFormItemId = exports.prepareDynamicalFieldsByFormType = exports.getCorrectExtraFormSubmitValues = exports.customizeFieldInputs = void 0;
var _lodash = require("lodash");
var _replaceObject = _interopRequireDefault(require("../../utils/replaceObject"));
var _config = require("./config");
var _config2 = require("../../assets/ArrayOfObjectsInput/config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const checkOnFloat = value => typeof value === "string" ? parseFloat(value) : value;
const getCorrectExtraFormSubmitValues = (val, parentType) => {
  if (parentType === _config.LOYALTY_LEVEL) {
    return {
      ...val,
      cashbackPercent: val.cashbackPercent ? checkOnFloat(val.cashbackPercent) : null,
      depositLimit: val.depositLimit ? checkOnFloat(val.depositLimit) : null,
      withdrawalLimit: val.withdrawLimit ? checkOnFloat(val.withdrawLimit) : null
    };
  } else if (parentType === _config.TOURNAMENT_CONSTRAINTS) {
    return {
      ...val,
      minBet: val.minBet || null,
      maxBet: val.maxBet || null
    };
  } else if (parentType === _config.TOURNAMENT_REWARDS) {
    return {
      ...val,
      position: val.position || null,
      bonusId: val.bonusId || null,
      balance: val.balance || null,
      value: val.value || null,
      physical: val.value || null
    };
  } else if (parentType === _config.TOURNAMENT_SCHEDULES) {
    return {
      ...val,
      startDate: val.startDate || null,
      endDate: val.endDate || null,
      dayToActivate: val.dayToActivate || null,
      duration: val.duration || null
    };
  }
  return val;
};
exports.getCorrectExtraFormSubmitValues = getCorrectExtraFormSubmitValues;
const removeExtraFormItemId = (item, parentType) => {
  if (parentType === _config.LOYALTY_LEVEL) {
    return (0, _replaceObject.default)(item, [_config.LOYALTY_LEVEL_ID]);
  } else if (parentType === _config.TOURNAMENT_CONSTRAINTS || parentType === _config.TOURNAMENT_REWARDS || parentType === _config.TOURNAMENT_SCHEDULES) {
    return (0, _replaceObject.default)(item, [_config2.TOURNAMENT_ID]);
  }
  return item;
};
exports.removeExtraFormItemId = removeExtraFormItemId;
const prepareDynamicalFieldsByFormType = _ref => {
  let {
    parentType,
    dynamicalInputs,
    formValues,
    formHandler,
    item
  } = _ref;
  if (parentType && (parentType === _config.LOYALTY_LEVEL || parentType === _config.TOURNAMENT_CONSTRAINTS || parentType === _config.TOURNAMENT_REWARDS || parentType === _config.TOURNAMENT_SCHEDULES) && dynamicalInputs) {
    if ((formValues === null || formValues === void 0 ? void 0 : formValues.type) !== "") {
      const selectedDynamicalInput = dynamicalInputs.find(dynamicalInput => dynamicalInput.type === (formValues === null || formValues === void 0 ? void 0 : formValues.type));
      if (selectedDynamicalInput) {
        console.log(selectedDynamicalInput);
        console.log(dynamicalInputs);
        selectedDynamicalInput === null || selectedDynamicalInput === void 0 ? void 0 : selectedDynamicalInput.inputs.forEach(input => {
          if (!(0, _lodash.has)(formValues, input)) {
            formHandler.setFieldValue(input, (item === null || item === void 0 ? void 0 : item[input]) || "");
          }
        });
      }
    }
  }
};
exports.prepareDynamicalFieldsByFormType = prepareDynamicalFieldsByFormType;
const customizeFieldInputs = _ref2 => {
  let {
    pv,
    parentType,
    item,
    externalValues
  } = _ref2;
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
  } else if (parentType === _config.TOURNAMENT_CONSTRAINTS) {
    if (pv.field === _config.TYPE) {
      var _tournamentTypeConstr;
      const tournamentTypeConstraintsValues = Object.keys(_config.TournamentConstraintType).map(key => ({
        name: key,
        code: _config.TournamentConstraintType[key]
      }));
      return {
        ...pv,
        ...(item ? {
          activeValue: {
            name: (_tournamentTypeConstr = tournamentTypeConstraintsValues.find(value => value.code === pv.value)) === null || _tournamentTypeConstr === void 0 ? void 0 : _tournamentTypeConstr.name,
            code: pv.value
          }
        } : null),
        value: tournamentTypeConstraintsValues
      };
    } else if (pv.field === _config.MIN_BET || pv.field === _config.MAX_BET) {
      return {
        ...pv,
        isArrayWithObject: true,
        initialValue: _config.currencyAmountInput,
        itemTitledBy: "currency",
        emptyLabel: "Empty"
      };
    }
  } else if (parentType === _config.TOURNAMENT_REWARDS) {
    if (pv.field === _config.TYPE) {
      var _tournamentTypeReward;
      const tournamentTypeRewardsValues = Object.keys(_config.TournamentRewardType).map(key => ({
        name: key,
        code: _config.TournamentRewardType[key]
      }));
      return {
        ...pv,
        ...(item ? {
          activeValue: {
            name: (_tournamentTypeReward = tournamentTypeRewardsValues.find(value => value.code === pv.value)) === null || _tournamentTypeReward === void 0 ? void 0 : _tournamentTypeReward.name,
            code: pv.value
          }
        } : null),
        value: tournamentTypeRewardsValues
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
  } else if (parentType === _config.TOURNAMENT_SCHEDULES) {
    if (pv.field === _config.TYPE) {
      var _tournamentTypeSchedu;
      const tournamentTypeSchedulesValues = Object.keys(_config.TournamentScheduleType).map(key => ({
        name: key,
        code: _config.TournamentScheduleType[key]
      }));
      return {
        ...pv,
        ...(item ? {
          activeValue: {
            name: (_tournamentTypeSchedu = tournamentTypeSchedulesValues.find(value => value.code === pv.value)) === null || _tournamentTypeSchedu === void 0 ? void 0 : _tournamentTypeSchedu.name,
            code: pv.value
          }
        } : null),
        value: tournamentTypeSchedulesValues
      };
    } else if (pv.field === _config.DAY_TO_ACTIVATE) {
      var _dayToActivateValues$;
      const dayToActivateValues = Object.keys(_config.DayToActivate).map(key => ({
        name: key,
        code: _config.DayToActivate[key]
      }));
      return {
        ...pv,
        ...(item ? {
          activeValue: {
            name: (_dayToActivateValues$ = dayToActivateValues.find(value => value.code === pv.value)) === null || _dayToActivateValues$ === void 0 ? void 0 : _dayToActivateValues$.name,
            code: pv.value
          }
        } : null),
        value: dayToActivateValues
      };
    } else if (pv.field === _config.START_DATE || pv.field === _config.END_DATE) {
      return {
        ...pv,
        value: item ? pv.value : undefined,
        isDate: true
      };
    }
  }
  return pv;
};
exports.customizeFieldInputs = customizeFieldInputs;
//# sourceMappingURL=helpers.js.map