import React, { memo } from 'react';
import { Select } from 'antd';
import { TimePicker } from '@shared/ui';

import { PERIOD_SELECT_OPTIONS } from './constants';
import { CronSelectProps, Period } from './types';
import classes from './styles.module.less';
import { useCron } from './hooks';
import { DynamicSelect } from './components';

export const CronSelect = memo(({ value, onChange }: CronSelectProps) => {
  const {
    periodSelectValue,
    weekDay,
    monthDay,
    time,
    handleChangePeriod,
    handleChangeWeekDay,
    handleChangeMonthDay,
    handleChangeTime,
  } = useCron({ value, onChange });

  return (
    <div className={classes.root}>
      <div className={classes.segment}>
        <span>Every:</span>
        <Select
          className={classes.period}
          size="large"
          onChange={handleChangePeriod}
          value={periodSelectValue}
          options={PERIOD_SELECT_OPTIONS}
        />
      </div>

      {periodSelectValue !== Period.DAY && (
        <div className={classes.segment}>
          <span>On:</span>
          <DynamicSelect
            periodSelectValue={periodSelectValue}
            weekDay={weekDay}
            monthDay={monthDay}
            onChangeWeekDay={handleChangeWeekDay}
            onChangeMonthDay={handleChangeMonthDay}
          />
        </div>
      )}

      <div className={classes.segment}>
        <span>At:</span>
        <TimePicker
          className={classes.time}
          size="large"
          format="HH:mm"
          onChange={handleChangeTime}
          value={time}
          clearIcon={false}
        />
      </div>
    </div>
  );
});
