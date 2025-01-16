import { CronSegmentValue } from '@shared/services';

import { Period } from '../../types';

/** Interface as Props for component "DynamicSelect" */
export interface DynamicSelectProps {
  /** Value of period Select */
  periodSelectValue: Period;
  /** Value of week day Select */
  weekDay: CronSegmentValue;
  /** Value of month day Select */
  monthDay: CronSegmentValue;
  /** Callback for changing value of week day Select */
  onChangeWeekDay: (value: CronSegmentValue) => void;
  /** Callback for changing value of month day Select */
  onChangeMonthDay: (value: CronSegmentValue) => void;
}
