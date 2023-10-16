import replaceObject from "../../utils/replaceObject";
import { LOYALITY_LEVEL_ID, LOYALTY_LEVEL } from "./config";

const checkOnFloat = (value: string) =>
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
      withdrawLimit: val.withdrawLimit ? checkOnFloat(val.withdrawLimit) : null,
    };
  }

  return val;
};

export const removeExtraFormItemId = (item: any, parentType?: string) => {
  if (parentType === LOYALTY_LEVEL) {
    return replaceObject(item, [LOYALITY_LEVEL_ID]);
  }

  return item;
};
