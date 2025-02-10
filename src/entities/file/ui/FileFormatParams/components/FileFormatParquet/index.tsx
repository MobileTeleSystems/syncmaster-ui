import React from 'react';

import { FileCompression } from '../FileCompression';

import { PARQUET_COMPRESSION_SELECT_OPTIONS } from './constants';
import { FileFormatParquetProps } from './types';

export const FileFormatParquet = ({ name }: FileFormatParquetProps) => {
  return <FileCompression name={name} options={PARQUET_COMPRESSION_SELECT_OPTIONS} />;
};
