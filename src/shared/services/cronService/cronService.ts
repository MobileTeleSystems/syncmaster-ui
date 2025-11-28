import { TFunction } from 'i18next';

import { CRON_VALUE_DEFAULT, DAY_OF_WEEK_DISPLAY, PERIOD_DISPLAY } from './constants';
import { CronSegmentKey, CronSegmentValue, DayOfWeek, Period } from './types';

/** Class for convenient handling cron settings */
export class CronService {
  private initialValueLength = 5;

  private period: Period;

  private value: Map<CronSegmentKey, CronSegmentValue>;

  private t: TFunction<'cron'>;

  constructor(t: TFunction<'cron'>, initialValue?: string) {
    this.value = this.transformInitialValueToMap(initialValue);
    this.period = this.initPeriod();
    this.t = t;
  }

  private transformInitialValueToMap(initialValue?: string) {
    const splittedValue = initialValue?.split(' ');
    if (splittedValue?.length !== this.initialValueLength) {
      return CRON_VALUE_DEFAULT;
    }

    const cronValue = splittedValue.map((segment) => {
      const parsedValue = parseInt(segment);
      if (Number.isInteger(parsedValue)) {
        return parsedValue;
      }
      return null;
    });

    return new Map<CronSegmentKey, CronSegmentValue>([
      ['minute', cronValue[0]],
      ['hour', cronValue[1]],
      ['date', cronValue[2]],
      ['day', cronValue[4]],
    ]);
  }

  private initPeriod() {
    if (this.getMonthDay() === null && this.getWeekDay() === null) {
      return Period.DAY;
    }
    if (this.getMonthDay()) {
      return Period.MONTH;
    }
    return Period.WEEK;
  }

  getPeriod() {
    return this.period;
  }

  getMinute(): number {
    return this.value.get('minute')!;
  }

  getHour(): number {
    return this.value.get('hour')!;
  }

  getTime() {
    return `${this.getHour()}:${this.getMinute()}`;
  }

  getMonthDay(): CronSegmentValue {
    return this.value.get('date') ?? null;
  }

  getWeekDay(): CronSegmentValue<DayOfWeek> {
    return this.value.get('day') ?? null;
  }

  setPeriod(period: Period) {
    this.period = period;
    switch (period) {
      case Period.DAY:
        this.setMonthDay(null);
        this.setWeekDay(null);
        break;
      case Period.WEEK:
        this.setWeekDay(new Date().getDay());
        this.setMonthDay(null);
        break;
      case Period.MONTH:
        this.setWeekDay(null);
        this.setMonthDay(new Date().getDate());
    }
  }

  setMinute(value: number) {
    if (value < 0 || value > 59) {
      throw new Error(this.t('minuteError'));
    }
    this.value.set('minute', value);
  }

  setHour(value: number) {
    if (value < 0 || value > 23) {
      throw new Error(this.t('hourError'));
    }
    this.value.set('hour', value);
  }

  setTime(hour?: number, minute?: number) {
    this.setHour(hour ?? new Date().getHours());
    this.setMinute(minute ?? new Date().getMinutes());
  }

  setMonthDay(value: CronSegmentValue) {
    if (value === null) {
      this.value.set('date', null);
      return;
    }
    if (value < 1 || value > 31) {
      throw new Error(this.t('dayError'));
    }
    this.value.set('date', value);
  }

  setWeekDay(value: CronSegmentValue<DayOfWeek>) {
    if (value === null) {
      this.value.set('day', null);
      return;
    }
    if (value < 0 || value > 6) {
      throw new Error(this.t('weekdayError'));
    }
    this.value.set('day', value);
  }

  toString() {
    const minute = this.getMinute();
    const hour = this.getHour();
    const date = this.getMonthDay() ?? '*';
    const day = this.getWeekDay() ?? '*';
    return `${minute} ${hour} ${date} * ${day}`;
  }

  getSchedule() {
    const time = this.getTime();
    const day = this.getWeekDay();
    const date = this.getMonthDay();

    let schedule = this.t(PERIOD_DISPLAY[this.period]);

    if (day !== null) {
      schedule += ` ${this.t(`${DAY_OF_WEEK_DISPLAY[day]}On`)}`;
    } else if (date) {
      schedule += ` ${this.t('dayOfMonthNumber', { count: date, ordinal: true })}`;
    }

    schedule += ` ${this.t('at')} ${time}`;

    return schedule;
  }
}
