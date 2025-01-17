export type CronSegmentValue = number | null;

export type CronSegmentKey = 'date' | 'day' | 'hour' | 'minute';

export enum Period {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}

export enum DayOfWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export enum DayOfWeekName {
  SUNDAY = 'Sunday',
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
}
