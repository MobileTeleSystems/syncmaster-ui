import React from 'react';
import { Select } from 'antd';
import { getOrdinalNumber } from '@shared/utils';
import { Period } from '@shared/services';

import classes from '../../styles.module.less';
import { DAYS_OF_MONTH_SELECT_OPTIONS, DAYS_OF_WEEK_SELECT_OPTIONS } from '../../constants';

import { DynamicSelectProps } from './types';

export const DynamicSelect = ({ period, weekDay, monthDay, onChangeWeekDay, onChangeMonthDay }: DynamicSelectProps) => {
  switch (period) {
    case Period.WEEK:
      return (
        <Select
          className={classes.day}
          size="large"
          onChange={onChangeWeekDay}
          options={DAYS_OF_WEEK_SELECT_OPTIONS}
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
          <span>{getOrdinalNumber(monthDay!, true)}</span>
        </div>
      );
    default:
      return null;
  }
};
