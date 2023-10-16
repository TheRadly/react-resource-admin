"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCorrectExtraFormSubmitValues = void 0;
var _config = require("./config");
const checkOnFloat = value => typeof value === "string" ? parseFloat(value).toFixed(2) : value;
const getCorrectExtraFormSubmitValues = (val, parentType) => {
  console.log(parentType);
  if (parentType === _config.LOYALTY_LEVEL) {
    console.log("if works", "------>", {
      ...val,
      ...(val.cashbackPercent ? {
        cashbackPercent: checkOnFloat(val.cashbackPercent)
      } : null),
      ...(val.depositLimit ? {
        depositLimit: checkOnFloat(val.depositLimit)
      } : null),
      ...(val.withdrawLimit ? {
        withdrawLimit: checkOnFloat(val.withdrawLimit)
      } : null)
    });
    return {
      ...val,
      ...(val.cashbackPercent ? {
        cashbackPercent: checkOnFloat(val.cashbackPercent)
      } : null),
      ...(val.depositLimit ? {
        depositLimit: checkOnFloat(val.depositLimit)
      } : null),
      ...(val.withdrawLimit ? {
        withdrawLimit: checkOnFloat(val.withdrawLimit)
      } : null)
    };
  }
  return val;
};
exports.getCorrectExtraFormSubmitValues = getCorrectExtraFormSubmitValues;
//# sourceMappingURL=helpers.js.map