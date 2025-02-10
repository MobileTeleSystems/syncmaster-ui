import React, { ReactElement } from 'react';
import { FileFormatType } from '@entities/file/types';

import {
  FileFormatCsv,
  FileFormatExcel,
  FileFormatJson,
  FileFormatJsonLine,
  FileFormatOrc,
  FileFormatParquet,
  FileFormatXml,
} from '../../components';

import { GetFileFormatComponentProps } from './types';

/** Util for getting file format component */
export const getFileFormatComponent = ({ name, fileFormatType }: GetFileFormatComponentProps): ReactElement => {
  switch (fileFormatType) {
    case FileFormatType.CSV:
      return <FileFormatCsv name={name} />;
    case FileFormatType.JSON:
      return <FileFormatJson name={name} />;
    case FileFormatType.JSON_LINE:
      return <FileFormatJsonLine name={name} />;
    case FileFormatType.EXCEL:
      return <FileFormatExcel name={name} />;
    case FileFormatType.ORC:
      return <FileFormatOrc name={name} />;
    case FileFormatType.PARQUET:
      return <FileFormatParquet name={name} />;
    case FileFormatType.XML:
      return <FileFormatXml name={name} />;
  }
};
