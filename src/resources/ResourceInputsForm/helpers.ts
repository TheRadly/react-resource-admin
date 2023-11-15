import replaceObject from "../../utils/replaceObject";
import { LOYALTY_LEVEL_ID, LOYALTY_LEVEL } from "./config";

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
    return replaceObject(item, [LOYALTY_LEVEL_ID]);
  }

  return item;
};
