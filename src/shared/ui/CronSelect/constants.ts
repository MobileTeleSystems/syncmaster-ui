import { DayOfWeek, DayOfWeekName } from '@shared/services';
import { prepareOptionsForSelect } from '@shared/ui';

import { Period } from './types';

export const PERIOD_SELECT_OPTIONS = prepareOptionsForSelect({
  data: Object.values(Period),
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

export const DAYS_OF_WEEK_SELECT_OPTIONS = prepareOptionsForSelect({
  data: [
    { value: DayOfWeek.MONDAY, label: DayOfWeekName.MONDAY },
    { value: DayOfWeek.TUESDAY, label: DayOfWeekName.TUESDAY },
    { value: DayOfWeek.WEDNESDAY, label: DayOfWeekName.WEDNESDAY },
    { value: DayOfWeek.THURSDAY, label: DayOfWeekName.THURSDAY },
    { value: DayOfWeek.FRIDAY, label: DayOfWeekName.FRIDAY },
    { value: DayOfWeek.SATURDAY, label: DayOfWeekName.SATURDAY },
    { value: DayOfWeek.SUNDAY, label: DayOfWeekName.SUNDAY },
  ],
  renderLabel: (data) => data.label,
  renderValue: (data) => data.value,
});

export const DAYS_OF_MONTH_SELECT_OPTIONS = prepareOptionsForSelect({
  data: Array.from({ length: 31 }, (_, index) => index + 1),
  renderLabel: (data) => data,
  renderValue: (data) => data,
});
