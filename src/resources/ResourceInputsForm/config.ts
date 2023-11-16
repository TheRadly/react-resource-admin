export const BONUS_ID = "bonusId";
export const CASHBACK_PERCENT = "cashbackPercent";
export const DEPOSIT_LIMIT = "depositLimit";
export const WITHDRAW_LIMIT = "withdrawLimit";
export const LOYALTY_LEVEL_ID = "loyaltyLevelId";
export const TYPE = "type";
export const MIN_BET = "minBet";
export const MAX_BET = "maxBet";
export const DAY_TO_ACTIVATE = "dayToActivate";
export const START_DATE = "startDate";
export const END_DATE = "endDate";
export const VALUE = "value";
export const POSITION = "position";
export const DURATION = "duration";
export const BALANCE = "balance";

export const LOYALTY_LEVEL = "LoyaltyLevel";
export const TOURNAMENT_CONSTRAINTS = "TournamentConstraints";
export const TOURNAMENT_REWARDS = "TournamentRewards";
export const TOURNAMENT_SCHEDULES = "TournamentSchedules";

export const LOYALTY_LEVEL_REWARD_TYPES = {
  BONUS: "BONUS",
  CASHBACK: "CASHBACK",
  DEPOSIT_LIMIT: "DEPOSIT_LIMIT",
  WITHDRAW_LIMIT: "WITHDRAW_LIMIT",
};

export const currencyAmountInput = {
  currency: "",
  amount: 0.0,
};

export enum LoyaltyRewardTypeEnums {
  Bonus = "BONUS",
  Cashback = "CASHBACK",
  DepositLimit = "DEPOSIT_LIMIT",
  WithdrawLimit = "WITHDRAW_LIMIT",
}

export enum TournamentConstraintType {
  MinBet = "MIN_BET",
  MaxBet = "MAX_BET",
}

export enum TournamentRewardType {
  Bonus = "BONUS",
  Balance = "BALANCE",
  FreeSpins = "FREE_SPINS",
  LoyaltyExp = "LOYALITY_EXP",
  LoyaltyPoints = "LOYALITY_POINTS",
  Physical = "PHYSICAL",
}

export enum TournamentScheduleType {
  Single = "SINGLE",
  DaysRepeatable = "DAYS_REPEATABLE",
  EveryMonth = "EVERY_MONTH",
}

export enum DayToActivate {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}
