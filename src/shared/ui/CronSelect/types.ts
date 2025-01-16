import { UseCronProps } from './hooks';

export interface CronSelectProps extends UseCronProps {}

export enum Period {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}
