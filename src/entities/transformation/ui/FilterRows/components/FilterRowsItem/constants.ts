import { prepareOptionsForSelect } from '@shared/ui';

import { TransformationRowsFilterType } from '../../../../types';

export const FILTER_ROWS_TYPE_SELECT_OPTIONS = prepareOptionsForSelect({
  data: Object.values(TransformationRowsFilterType),
  renderLabel: (data) => data.replaceAll('_', ' '),
  renderValue: (data) => data,
});
