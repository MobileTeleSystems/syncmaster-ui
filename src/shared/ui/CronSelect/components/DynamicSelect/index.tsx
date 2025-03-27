import React from 'react';
import { Period } from '@shared/services';
import { Select } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import classes from '../../styles.module.less';
import { DAYS_OF_MONTH_SELECT_OPTIONS } from '../../constants';
import { useGetDaysOfWeekSelectOptions } from '../../hooks';

import { DynamicSelectProps } from './types';

export const DynamicSelect = ({ period, weekDay, monthDay, onChangeWeekDay, onChangeMonthDay }: DynamicSelectProps) => {
  const { t } = useTranslation('shared');
  const daysOfWeekSelectOptions = useGetDaysOfWeekSelectOptions();

  switch (period) {
    case Period.WEEK:
      return (
        <Select
          className={classes.day}
          size="large"
          onChange={onChangeWeekDay}
          options={daysOfWeekSelectOptions}
          value={weekDay}
        />
      );
    case Period.MONTH:
      return (
        <div className={classes.month}>
          <Select
            className={classes.date}
            size="large"
            onChange={onChangeMonthDay}
            options={DAYS_OF_MONTH_SELECT_OPTIONS}
            value={monthDay}
          />
          <span>{t('dayOfMonth', { count: monthDay! })}</span>
        </div>
      );
    default:
      return null;
  }
};
