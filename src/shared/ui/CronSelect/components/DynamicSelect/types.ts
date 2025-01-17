import { CronSegmentValue, Period } from '@shared/services';

/** Interface as Props for component "DynamicSelect" */
export interface DynamicSelectProps {
  /** Value of period Select */
  period: Period;
  /** Value of week day Select */
  weekDay: CronSegmentValue;
  /** Value of month day Select */
  monthDay: CronSegmentValue;
  /** Callback for changing value of week day Select */
  onChangeWeekDay: (value: CronSegmentValue) => void;
  /** Callback for changing value of month day Select */
  onChangeMonthDay: (value: CronSegmentValue) => void;
}
