import { OptionItem } from '@shared/ui';

import { FileFormatFieldName } from '../types';

export interface FileCompressionProps<T> extends FileFormatFieldName {
  options: OptionItem<T>[];
}
