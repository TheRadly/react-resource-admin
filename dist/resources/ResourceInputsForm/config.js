"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currencyAmountInput = exports.WITHDRAW_LIMIT = exports.TournamentScheduleType = exports.TournamentRewardType = exports.TournamentConstraintType = exports.TYPE = exports.TOURNAMENT_SCHEDULES = exports.TOURNAMENT_REWARDS = exports.TOURNAMENT_CONSTRAINTS = exports.START_DATE = exports.MIN_BET = exports.MAX_BET = exports.LoyaltyRewardTypeEnums = exports.LOYALTY_LEVEL_REWARD_TYPES = exports.LOYALTY_LEVEL_ID = exports.LOYALTY_LEVEL = exports.END_DATE = exports.DayToActivate = exports.DEPOSIT_LIMIT = exports.DAY_TO_ACTIVATE = exports.CASHBACK_PERCENT = exports.BONUS_ID = void 0;
const BONUS_ID = "bonusId";
exports.BONUS_ID = BONUS_ID;
const CASHBACK_PERCENT = "cashbackPercent";
exports.CASHBACK_PERCENT = CASHBACK_PERCENT;
const DEPOSIT_LIMIT = "depositLimit";
exports.DEPOSIT_LIMIT = DEPOSIT_LIMIT;
const WITHDRAW_LIMIT = "withdrawLimit";
exports.WITHDRAW_LIMIT = WITHDRAW_LIMIT;
const LOYALTY_LEVEL_ID = "loyaltyLevelId";
exports.LOYALTY_LEVEL_ID = LOYALTY_LEVEL_ID;
const TYPE = "type";
exports.TYPE = TYPE;
const MIN_BET = "minBet";
exports.MIN_BET = MIN_BET;
const MAX_BET = "maxBet";
exports.MAX_BET = MAX_BET;
const DAY_TO_ACTIVATE = "dayToActivate";
exports.DAY_TO_ACTIVATE = DAY_TO_ACTIVATE;
const START_DATE = "startDate";
exports.START_DATE = START_DATE;
const END_DATE = "endDate";
exports.END_DATE = END_DATE;
const LOYALTY_LEVEL = "LoyaltyLevel";
exports.LOYALTY_LEVEL = LOYALTY_LEVEL;
const TOURNAMENT_CONSTRAINTS = "TournamentConstraints";
exports.TOURNAMENT_CONSTRAINTS = TOURNAMENT_CONSTRAINTS;
const TOURNAMENT_REWARDS = "TournamentRewards";
exports.TOURNAMENT_REWARDS = TOURNAMENT_REWARDS;
const TOURNAMENT_SCHEDULES = "TournamentSchedules";
exports.TOURNAMENT_SCHEDULES = TOURNAMENT_SCHEDULES;
const LOYALTY_LEVEL_REWARD_TYPES = {
  BONUS: "BONUS",
  CASHBACK: "CASHBACK",
  DEPOSIT_LIMIT: "DEPOSIT_LIMIT",
  WITHDRAW_LIMIT: "WITHDRAW_LIMIT"
};
exports.LOYALTY_LEVEL_REWARD_TYPES = LOYALTY_LEVEL_REWARD_TYPES;
const currencyAmountInput = {
  currency: "",
  amount: 0.0
};
exports.currencyAmountInput = currencyAmountInput;
let LoyaltyRewardTypeEnums = function (LoyaltyRewardTypeEnums) {
  LoyaltyRewardTypeEnums["Bonus"] = "BONUS";
  LoyaltyRewardTypeEnums["Cashback"] = "CASHBACK";
  LoyaltyRewardTypeEnums["DepositLimit"] = "DEPOSIT_LIMIT";
  LoyaltyRewardTypeEnums["WithdrawLimit"] = "WITHDRAW_LIMIT";
  return LoyaltyRewardTypeEnums;
}({});
exports.LoyaltyRewardTypeEnums = LoyaltyRewardTypeEnums;
let TournamentConstraintType = function (TournamentConstraintType) {
  TournamentConstraintType["MinBet"] = "MIN_BET";
  TournamentConstraintType["MaxBet"] = "MAX_BET";
  return TournamentConstraintType;
}({});
exports.TournamentConstraintType = TournamentConstraintType;
let TournamentRewardType = function (TournamentRewardType) {
  TournamentRewardType["Bonus"] = "BONUS";
  TournamentRewardType["Balance"] = "BALANCE";
  TournamentRewardType["FreeSpins"] = "FREE_SPINS";
  TournamentRewardType["LoyaltyExp"] = "LOYALITY_EXP";
  TournamentRewardType["LoyaltyPoints"] = "LOYALITY_POINTS";
  TournamentRewardType["Physical"] = "PHYSICAL";
  return TournamentRewardType;
}({});
exports.TournamentRewardType = TournamentRewardType;
let TournamentScheduleType = function (TournamentScheduleType) {
  TournamentScheduleType["Single"] = "SINGLE";
  TournamentScheduleType["DaysRepeatable"] = "DAYS_REPEATABLE";
  TournamentScheduleType["EveryMonth"] = "EVERY_MONTH";
  return TournamentScheduleType;
}({});
exports.TournamentScheduleType = TournamentScheduleType;
let DayToActivate = function (DayToActivate) {
  DayToActivate["Monday"] = "MONDAY";
  DayToActivate["Tuesday"] = "TUESDAY";
  DayToActivate["Wednesday"] = "WEDNESDAY";
  DayToActivate["Thursday"] = "THURSDAY";
  DayToActivate["Friday"] = "FRIDAY";
  DayToActivate["Saturday"] = "SATURDAY";
  DayToActivate["Sunday"] = "SUNDAY";
  return DayToActivate;
}({});
exports.DayToActivate = DayToActivate;
//# sourceMappingURL=config.js.map