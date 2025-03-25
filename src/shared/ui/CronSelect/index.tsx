import React, { memo } from 'react';
import { Select, TimePicker } from '@shared/ui';
import { Period } from '@shared/services';
import { useTranslation } from 'react-i18next';

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
        <span>{t('every')}:</span>
        <Select
          className={classes.period}
          size="large"
          onChange={handleChangePeriod}
          value={period}
          options={periodSelectOptions}
        />
      </div>

      {period !== Period.DAY && (
        <div className={classes.segment}>
          <span>{t('on')}:</span>
          <DynamicSelect
            period={period}
            weekDay={weekDay}
            monthDay={monthDay}
            onChangeWeekDay={handleChangeWeekDay}
            onChangeMonthDay={handleChangeMonthDay}
          />
        </div>
      )}

      <div className={classes.segment}>
        <span>{t('at')}:</span>
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
