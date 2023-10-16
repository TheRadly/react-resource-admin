"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCorrectExtraFormSubmitValues = void 0;
var _config = require("./config");
const checkOnFloat = value => typeof value === "string" ? parseFloat(value) : value;
const getCorrectExtraFormSubmitValues = (val, parentType) => {
  if (parentType === _config.LOYALTY_LEVEL) {
    return {
      ...val,
      cashbackPercent: val.cashbackPercent ? checkOnFloat(val.cashbackPercent) : null,
      depositLimit: val.depositLimit ? checkOnFloat(val.depositLimit) : null,
      withdrawLimit: val.withdrawLimit ? checkOnFloat(val.withdrawLimit) : null
    };
  }
  return val;
};
exports.getCorrectExtraFormSubmitValues = getCorrectExtraFormSubmitValues;
//# sourceMappingURL=helpers.js.map