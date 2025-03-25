import { prepareOptionsForSelect } from '@shared/ui';

export const DAYS_OF_MONTH_SELECT_OPTIONS = prepareOptionsForSelect({
  data: Array.from({ length: 31 }, (_, index) => index + 1),
  renderLabel: (data) => data,
  renderValue: (data) => data,
});
