export declare const BONUS_ID = "bonusId";
export declare const CASHBACK_PERCENT = "cashbackPercent";
export declare const DEPOSIT_LIMIT = "depositLimit";
export declare const WITHDRAW_LIMIT = "withdrawLimit";
export declare const LOYALTY_LEVEL_ID = "loyaltyLevelId";
export declare const TYPE = "type";
export declare const MIN_BET = "minBet";
export declare const MAX_BET = "maxBet";
export declare const DAY_TO_ACTIVATE = "dayToActivate";
export declare const START_DATE = "startDate";
export declare const END_DATE = "endDate";
export declare const VALUE = "value";
export declare const POSITION = "position";
export declare const DURATION = "duration";
export declare const LOYALTY_LEVEL = "LoyaltyLevel";
export declare const TOURNAMENT_CONSTRAINTS = "TournamentConstraints";
export declare const TOURNAMENT_REWARDS = "TournamentRewards";
export declare const TOURNAMENT_SCHEDULES = "TournamentSchedules";
export declare const LOYALTY_LEVEL_REWARD_TYPES: {
    BONUS: string;
    CASHBACK: string;
    DEPOSIT_LIMIT: string;
    WITHDRAW_LIMIT: string;
};
export declare const currencyAmountInput: {
    currency: string;
    amount: number;
};
export declare enum LoyaltyRewardTypeEnums {
    Bonus = "BONUS",
    Cashback = "CASHBACK",
    DepositLimit = "DEPOSIT_LIMIT",
    WithdrawLimit = "WITHDRAW_LIMIT"
}
export declare enum TournamentConstraintType {
    MinBet = "MIN_BET",
    MaxBet = "MAX_BET"
}
export declare enum TournamentRewardType {
    Bonus = "BONUS",
    Balance = "BALANCE",
    FreeSpins = "FREE_SPINS",
    LoyaltyExp = "LOYALITY_EXP",
    LoyaltyPoints = "LOYALITY_POINTS",
    Physical = "PHYSICAL"
}
export declare enum TournamentScheduleType {
    Single = "SINGLE",
    DaysRepeatable = "DAYS_REPEATABLE",
    EveryMonth = "EVERY_MONTH"
}
export declare enum DayToActivate {
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
