import { getOrdinalNumber } from '@shared/utils';

import { CRON_VALUE_DEFAULT, DAYS_OF_WEEK } from './constants';
import { CronSegmentKey, CronSegmentValue } from './types';

/** Class for convenient handling cron settings */
export class CronService {
  private initialValueLength = 5;

  private value: Map<CronSegmentKey, CronSegmentValue>;

  constructor(initialValue?: string) {
    this.value = this.transformInitialValueToMap(initialValue);
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

  getMinute(): number {
    return this.value.get('minute')!;
  }

  getHour(): number {
    return this.value.get('hour')!;
  }

  getMonthDay(): CronSegmentValue {
    return this.value.get('date') ?? null;
  }

  getWeekDay(): CronSegmentValue {
    return this.value.get('day') ?? null;
  }

  getTime() {
    return `${this.getHour()}:${this.getMinute()}`;
  }

  setMinute(value: number) {
    if (value < 0 || value > 59) {
      this.value.set('minute', new Date().getMinutes());
    } else {
      this.value.set('minute', value);
    }
  }

  setHour(value: number) {
    if (value < 0 || value > 23) {
      this.value.set('hour', new Date().getHours());
    } else {
      this.value.set('hour', value);
    }
  }

  setMonthDay(value: CronSegmentValue) {
    if (value === null) {
      this.value.set('date', null);
      return;
    }
    if (value < 1 || value > 31) {
      this.value.set('date', new Date().getDate());
    } else {
      this.value.set('date', value);
    }
    this.setWeekDay(null);
  }

  setWeekDay(value: CronSegmentValue) {
    if (value === null) {
      this.value.set('day', null);
      return;
    }
    if (value < 0 || value > 6) {
      this.value.set('day', new Date().getDay());
    } else {
      this.value.set('day', value);
    }
    this.setMonthDay(null);
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

    let schedule = 'Every ';

    if (day === null && !date) {
      schedule += 'day ';
    } else if (day !== null && !date) {
      schedule += 'week ';
    } else {
      schedule += 'month ';
    }

    if (day !== null) {
      schedule += `on ${DAYS_OF_WEEK[day]} `;
    } else if (date) {
      schedule += `${getOrdinalNumber(date)} `;
    }

    schedule += `at ${time}`;

    return schedule;
  }
}
