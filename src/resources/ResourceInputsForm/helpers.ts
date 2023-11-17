import { has } from "lodash";
import replaceObject from "../../utils/replaceObject";
import {
  LOYALTY_LEVEL_ID,
  LOYALTY_LEVEL,
  TOURNAMENT_CONSTRAINTS,
  TOURNAMENT_REWARDS,
  TOURNAMENT_SCHEDULES,
  TYPE,
  LoyaltyRewardTypeEnums,
  CASHBACK_PERCENT,
  DEPOSIT_LIMIT,
  WITHDRAW_LIMIT,
  BONUS_ID,
  TournamentConstraintType,
  currencyAmountInput,
  MIN_BET,
  MAX_BET,
  TournamentRewardType,
  TournamentScheduleType,
  DAY_TO_ACTIVATE,
  DayToActivate,
  START_DATE,
  END_DATE,
  VALUE,
  POSITION,
  DURATION,
  BALANCE,
} from "./config";
import { TOURNAMENT_ID } from "../../assets/ArrayOfObjectsInput/config";

const checkOnFloat = (value: string | number) =>
  typeof value === "string" ? parseFloat(value) : value;

export const getCorrectExtraFormSubmitValues = (
  val: any,
  parentType?: string
) => {
  if (parentType === LOYALTY_LEVEL) {
    return {
      ...val,
      cashbackPercent: val.cashbackPercent
        ? checkOnFloat(val.cashbackPercent)
        : null,
      depositLimit: val.depositLimit ? checkOnFloat(val.depositLimit) : null,
      withdrawalLimit: val.withdrawLimit
        ? checkOnFloat(val.withdrawLimit)
        : null,
    };
  } else if (parentType === TOURNAMENT_CONSTRAINTS) {
    return {
      ...val,
      minBet: val.minBet
        ? val.minBet.map(
            (minBet: { currency: string; amount: string | number }) => ({
              currency: minBet?.currency,
              amount: checkOnFloat(minBet?.amount),
            })
          )
        : null,
      maxBet: val.maxBet
        ? val.maxBet.map(
            (maxBet: { currency: string; amount: string | number }) => ({
              currency: maxBet?.currency,
              amount: checkOnFloat(maxBet?.amount),
            })
          )
        : null,
    };
  } else if (parentType === TOURNAMENT_REWARDS) {
    return {
      ...val,
      position: val.position,
      bonusId: val.bonusId || null,
      balance: val.balance
        ? val.balance.map(
            (balance: { currency: string; amount: string | number }) => ({
              currency: balance?.currency,
              amount: checkOnFloat(balance?.amount),
            })
          )
        : null,
      value: val.value || null,
      physical: val.physical || null,
    };
  } else if (parentType === TOURNAMENT_SCHEDULES) {
    return {
      ...val,
      startDate: val.startDate || null,
      endDate: val.endDate || null,
      dayToActivate: val.dayToActivate || null,
      duration: val.duration || null,
    };
  }

  return val;
};

export const removeExtraFormItemId = (item: any, parentType?: string) => {
  if (parentType === LOYALTY_LEVEL) {
    return replaceObject(item, [LOYALTY_LEVEL_ID]);
  } else if (
    parentType === TOURNAMENT_CONSTRAINTS ||
    parentType === TOURNAMENT_REWARDS ||
    parentType === TOURNAMENT_SCHEDULES
  ) {
    return replaceObject(item, [TOURNAMENT_ID]);
  }

  return item;
};

export const getCurrentInitialValueByInput = (input: string) => {
  switch (input) {
    case POSITION:
      return 0;
    case VALUE:
      return 0;
    case BALANCE:
      return [];
    case MIN_BET:
      return [];
    case MAX_BET:
      return [];
    case DURATION:
      return 0;
    default:
      return "";
  }
};

export const prepareDynamicalFieldsByFormType = ({
  parentType,
  dynamicalInputs,
  formValues,
  formHandler,
  item,
}: {
  formValues: any;
  parentType?: string;
  dynamicalInputs?: any;
  formHandler: any;
  item: any;
}) => {
  if (
    parentType &&
    (parentType === LOYALTY_LEVEL ||
      parentType === TOURNAMENT_CONSTRAINTS ||
      parentType === TOURNAMENT_REWARDS ||
      parentType === TOURNAMENT_SCHEDULES) &&
    dynamicalInputs
  ) {
    if (formValues?.type !== "") {
      const selectedDynamicalInput = dynamicalInputs.find(
        (dynamicalInput: { type: string; inputs: string[] }) =>
          dynamicalInput.type === formValues?.type
      );

      if (selectedDynamicalInput) {
        dynamicalInputs.forEach(
          (dynamicalInput: { type: string; inputs: string[] }) => {
            if (dynamicalInput.type !== formValues?.type) {
              dynamicalInput.inputs.forEach((currentInput) => {
                if (
                  has(formValues, currentInput) &&
                  !selectedDynamicalInput.inputs.includes(currentInput)
                ) {
                  formHandler.setFieldValue(currentInput, undefined);
                }
              });
            }
          }
        );

        selectedDynamicalInput?.inputs.forEach((input: string) => {
          if (!has(formValues, input)) {
            formHandler.setFieldValue(
              input,
              item?.[input] || getCurrentInitialValueByInput(input)
            );
          }
        });
      }
    }
  }
};

export const customizeFieldInputs = ({
  pv,
  parentType,
  item,
  externalValues,
}: {
  pv: { value: any; field: string };
  parentType?: string;
  item: any;
  externalValues: any;
}) => {
  if (parentType === LOYALTY_LEVEL) {
    if (pv.field === TYPE) {
      const dropdownTypeValues = Object.keys(LoyaltyRewardTypeEnums).map(
        (key) => ({
          name: key,
          // @ts-ignore
          code: LoyaltyRewardTypeEnums[key],
        })
      );

      return {
        ...pv,
        ...(item
          ? {
              activeValue: {
                // @ts-ignore
                name: dropdownTypeValues.find(
                  (value) => value.code === pv.value
                )?.name,
                code: pv.value,
              },
            }
          : null),
        value: dropdownTypeValues,
      };
    } else if (
      pv.field === CASHBACK_PERCENT ||
      pv.field === DEPOSIT_LIMIT ||
      pv.field === WITHDRAW_LIMIT
    ) {
      return item
        ? {
            ...pv,
            isFloat: true,
            value:
              typeof pv.value === "string"
                ? pv.value
                : pv.value?.toString() || "",
          }
        : {
            ...pv,
            isFloat: true,
          };
    } else if (pv.field === LOYALTY_LEVEL_ID) {
      return {
        ...item,
        isDisabled: true,
      };
    } else if (pv.field === BONUS_ID) {
      const bonusesValues = externalValues?.bonuses.map((bonus: any) => ({
        name: bonus.name,
        code: bonus.id,
      }));

      return {
        ...pv,
        ...(item
          ? {
              activeValue: bonusesValues?.find(
                (bonus: any) => bonus.code === pv.value
              ),
            }
          : null),
        value: bonusesValues,
      };
    }
  } else if (parentType === TOURNAMENT_CONSTRAINTS) {
    if (pv.field === TYPE) {
      const tournamentTypeConstraintsValues = Object.keys(
        TournamentConstraintType
      ).map((key) => ({
        name: key,
        // @ts-ignore
        code: TournamentConstraintType[key],
      }));

      return {
        ...pv,
        ...(item
          ? {
              activeValue: {
                name: tournamentTypeConstraintsValues.find(
                  (value) => value.code === pv.value
                )?.name,
                code: pv.value,
              },
            }
          : null),
        value: tournamentTypeConstraintsValues,
      };
    } else if (pv.field === MIN_BET || pv.field === MAX_BET) {
      return {
        ...pv,
        value: pv.value,
        isArrayWithObject: true,
        initialValue: currencyAmountInput,
        itemTitledBy: "currency",
        emptyLabel: "Empty",
      };
    }
  } else if (parentType === TOURNAMENT_REWARDS) {
    if (pv.field === TYPE) {
      const tournamentTypeRewardsValues = Object.keys(TournamentRewardType).map(
        (key) => ({
          name: key,
          // @ts-ignore
          code: TournamentRewardType[key],
        })
      );

      return {
        ...pv,
        ...(item
          ? {
              activeValue: {
                name: tournamentTypeRewardsValues.find(
                  (value) => value.code === pv.value
                )?.name,
                code: pv.value,
              },
            }
          : null),
        value: tournamentTypeRewardsValues,
      };
    } else if (pv.field === BALANCE) {
      return {
        ...pv,
        value: pv.value,
        isArrayWithObject: true,
        initialValue: currencyAmountInput,
        itemTitledBy: "currency",
        emptyLabel: "Empty",
      };
    } else if (pv.field === BONUS_ID) {
      const bonusesValues = externalValues?.bonuses.map((bonus: any) => ({
        name: bonus.name,
        code: bonus.id,
      }));

      return {
        ...pv,
        ...(item
          ? {
              activeValue: bonusesValues?.find(
                (bonus: any) => bonus.code === pv.value
              ),
            }
          : null),
        value: bonusesValues,
      };
    }
  } else if (parentType === TOURNAMENT_SCHEDULES) {
    if (pv.field === TYPE) {
      const tournamentTypeSchedulesValues = Object.keys(
        TournamentScheduleType
      ).map((key) => ({
        name: key,
        // @ts-ignore
        code: TournamentScheduleType[key],
      }));

      return {
        ...pv,
        ...(item
          ? {
              activeValue: {
                name: tournamentTypeSchedulesValues.find(
                  (value) => value.code === pv.value
                )?.name,
                code: pv.value,
              },
            }
          : null),
        value: tournamentTypeSchedulesValues,
      };
    } else if (pv.field === DAY_TO_ACTIVATE) {
      const dayToActivateValues = Object.keys(DayToActivate).map((key) => ({
        name: key,
        // @ts-ignore
        code: DayToActivate[key],
      }));

      return {
        ...pv,
        ...(item
          ? {
              activeValue: {
                name: dayToActivateValues.find(
                  (value) => value.code === pv.value
                )?.name,
                code: pv.value,
              },
            }
          : null),
        value: dayToActivateValues,
      };
    } else if (pv.field === START_DATE || pv.field === END_DATE) {
      return {
        ...pv,
        value: item ? pv.value : pv.value === "" ? undefined : pv.value,
        isDate: true,
      };
    }
  }

  return pv;
};
