import { FileFormat } from '@entities/file';
import { TFunction } from 'i18next';

export interface GetDescriptionItemsProps {
  t: TFunction<'file'>;
  data: FileFormat;
}
