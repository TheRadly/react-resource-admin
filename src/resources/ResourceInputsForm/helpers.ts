import { LOYALTY_LEVEL } from "./config";

const checkOnFloat = (value: string) =>
  typeof value === "string" ? parseFloat(value).toFixed(2) : value;

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
