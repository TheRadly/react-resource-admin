"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WITHDRAW_LIMIT = exports.TYPE = exports.LoyaltyRewardTypeEnums = exports.LOYALTY_LEVEL_REWARD_TYPES = exports.LOYALTY_LEVEL = exports.LOYALITY_LEVEL_ID = exports.DEPOSIT_LIMIT = exports.CASHBACK_PERCENT = exports.BONUS_ID = void 0;
const BONUS_ID = "bonusId";
exports.BONUS_ID = BONUS_ID;
const CASHBACK_PERCENT = "cashbackPercent";
exports.CASHBACK_PERCENT = CASHBACK_PERCENT;
const DEPOSIT_LIMIT = "depositLimit";
exports.DEPOSIT_LIMIT = DEPOSIT_LIMIT;
const WITHDRAW_LIMIT = "withdrawLimit";
exports.WITHDRAW_LIMIT = WITHDRAW_LIMIT;
const LOYALITY_LEVEL_ID = "loyalityLevelId";
exports.LOYALITY_LEVEL_ID = LOYALITY_LEVEL_ID;
const TYPE = "type";
exports.TYPE = TYPE;
const LOYALTY_LEVEL = "LoyaltyLevel";
exports.LOYALTY_LEVEL = LOYALTY_LEVEL;
const LOYALTY_LEVEL_REWARD_TYPES = {
  BONUS: "BONUS",
  CASHBACK: "CASHBACK",
  DEPOSIT_LIMIT: "DEPOSIT_LIMIT",
  WITHDRAW_LIMIT: "WITHDRAW_LIMIT"
};
exports.LOYALTY_LEVEL_REWARD_TYPES = LOYALTY_LEVEL_REWARD_TYPES;
let LoyaltyRewardTypeEnums = function (LoyaltyRewardTypeEnums) {
  LoyaltyRewardTypeEnums["Bonus"] = "BONUS";
  LoyaltyRewardTypeEnums["Cashback"] = "CASHBACK";
  LoyaltyRewardTypeEnums["DepositLimit"] = "DEPOSIT_LIMIT";
  LoyaltyRewardTypeEnums["WithdrawLimit"] = "WITHDRAW_LIMIT";
  return LoyaltyRewardTypeEnums;
}({});
exports.LoyaltyRewardTypeEnums = LoyaltyRewardTypeEnums;
//# sourceMappingURL=config.js.map