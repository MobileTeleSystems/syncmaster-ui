import { OptionItem } from '@shared/ui';

import { FileFormatFieldName } from '../types';

export interface FileLineSeparatorProps<T> extends FileFormatFieldName {
  options: OptionItem<T>[];
}
