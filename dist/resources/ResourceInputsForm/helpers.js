"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeExtraFormItemId = exports.getCorrectExtraFormSubmitValues = void 0;
var _replaceObject = _interopRequireDefault(require("../../utils/replaceObject"));
var _config = require("./config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
const removeExtraFormItemId = (item, parentType) => {
  if (parentType === _config.LOYALTY_LEVEL) {
    return (0, _replaceObject.default)(item, [_config.LOYALTY_LEVEL_ID]);
  }
  return item;
};
exports.removeExtraFormItemId = removeExtraFormItemId;
//# sourceMappingURL=helpers.js.map