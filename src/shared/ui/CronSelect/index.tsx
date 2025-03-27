import React, { memo } from 'react';
import { TimePicker } from '@shared/ui';
import { Period } from '@shared/services';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';

import { CronSelectProps } from './types';
import classes from './styles.module.less';
import { useCron, useGetPeriodSelectOptions } from './hooks';
import { DynamicSelect } from './components';

export const CronSelect = memo(({ value, onChange }: CronSelectProps) => {
  const { t } = useTranslation('shared');
  const periodSelectOptions = useGetPeriodSelectOptions();

  const {
    period,
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
        <span>{t('period')}:</span>
        <Select
          className={classes.period}
          size="large"
          onChange={handleChangePeriod}
          value={period}
          placement="topLeft"
          options={periodSelectOptions}
        />
      </div>

      {period !== Period.DAY && (
        <DynamicSelect
          period={period}
          weekDay={weekDay}
          monthDay={monthDay}
          onChangeWeekDay={handleChangeWeekDay}
          onChangeMonthDay={handleChangeMonthDay}
        />
      )}

      <div className={classes.segment}>
        <span>{t('time')}:</span>
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
