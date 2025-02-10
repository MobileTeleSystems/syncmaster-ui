import React from 'react';

import { FileCompression } from '../FileCompression';

import { ORC_COMPRESSION_SELECT_OPTIONS } from './constants';
import { FileFormatOrcProps } from './types';

export const FileFormatOrc = ({ name }: FileFormatOrcProps) => {
  return <FileCompression name={name} options={ORC_COMPRESSION_SELECT_OPTIONS} />;
};
