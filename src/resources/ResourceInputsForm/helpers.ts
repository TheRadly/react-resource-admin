import { LOYALTY_LEVEL } from "./config";

const checkOnFloat = (value: string) =>
  typeof value === "string" ? parseFloat(value).toFixed(2) : value;

export const getCorrectExtraFormSubmitValues = (
  val: any,
  parentType?: string
) => {
  console.log(parentType);
  if (parentType === LOYALTY_LEVEL) {
    console.log("if works", "------>", {
      ...val,
      ...(val.cashbackPercent
        ? { cashbackPercent: checkOnFloat(val.cashbackPercent) }
        : null),
      ...(val.depositLimit
        ? { depositLimit: checkOnFloat(val.depositLimit) }
        : null),
      ...(val.withdrawLimit
        ? { withdrawLimit: checkOnFloat(val.withdrawLimit) }
        : null),
    });

    return {
      ...val,
      ...(val.cashbackPercent
        ? { cashbackPercent: checkOnFloat(val.cashbackPercent) }
        : null),
      ...(val.depositLimit
        ? { depositLimit: checkOnFloat(val.depositLimit) }
        : null),
      ...(val.withdrawLimit
        ? { withdrawLimit: checkOnFloat(val.withdrawLimit) }
        : null),
    };
  }

  return val;
};
