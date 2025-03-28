import React from 'react';
import { Period } from '@shared/services';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';

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
        <div className={classes.segment}>
          <span>{t('dayOfWeek')}:</span>
          <Select
            className={classes.day}
            size="large"
            onChange={onChangeWeekDay}
            options={daysOfWeekSelectOptions}
            placement="topLeft"
            value={weekDay}
          />
        </div>
      );
    case Period.MONTH:
      return (
        <div className={classes.segment}>
          <span>{t('dayOfMonth')}:</span>
          <div className={classes.month}>
            <Select
              className={classes.date}
              size="large"
              onChange={onChangeMonthDay}
              options={DAYS_OF_MONTH_SELECT_OPTIONS}
              placement="topLeft"
              value={monthDay}
            />
            <span>{t('dayOfMonth', { count: monthDay!, ordinal: true })}</span>
          </div>
        </div>
      );
    default:
      return null;
  }
};
