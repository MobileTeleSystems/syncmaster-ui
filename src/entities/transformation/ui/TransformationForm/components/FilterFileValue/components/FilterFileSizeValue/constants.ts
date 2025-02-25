import { FileSizeUnit } from '@entities/file/@x/transformation';
import { prepareOptionsForSelect } from '@shared/ui';

export const FILE_SIZE_UNIT_SELECT_OPTIONS = prepareOptionsForSelect({
  data: Object.values(FileSizeUnit),
  renderLabel: (data) => data,
  renderValue: (data) => data,
});
