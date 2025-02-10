export enum FileCompression {
  NONE = 'none',
  BZIP2 = 'bzip2',
  GZIP = 'gzip',
  LZ4 = 'lz4',
  SNAPPY = 'snappy',
  ZLIB = 'zlib',
  DEFLATE = 'deflate',
}

export enum FileFormatType {
  CSV = 'csv',
  EXCEL = 'excel',
  JSON = 'json',
  JSON_LINE = 'jsonline',
  ORC = 'orc',
  PARQUET = 'parquet',
  XML = 'xml',
}

export type FileFormat = Csv | Json | JsonLine | Excel | Orc | Parquet | Xml;

export interface Csv {
  type: FileFormatType.CSV;
  delimiter: string;
  encoding: string;
  quote: string;
  escape: string;
  include_header: boolean;
  line_sep: string;
  compression: Exclude<FileCompression, FileCompression.ZLIB> | 'none';
}

export interface Json {
  type: FileFormatType.JSON;
  encoding: string;
  line_sep: string;
  compression: Exclude<FileCompression, FileCompression.ZLIB> | 'none';
}

export interface JsonLine {
  type: FileFormatType.JSON_LINE;
  encoding: string;
  line_sep: string;
  compression: Exclude<FileCompression, FileCompression.ZLIB> | 'none';
}

export interface Excel {
  type: FileFormatType.EXCEL;
  include_header: boolean;
  start_cell: string | null;
}

export interface Orc {
  type: FileFormatType.ORC;
  compression:
    | Exclude<FileCompression, FileCompression.BZIP2 | FileCompression.GZIP | FileCompression.DEFLATE>
    | 'none';
}

export interface Parquet {
  type: FileFormatType.PARQUET;
  compression:
    | Exclude<FileCompression, FileCompression.BZIP2 | FileCompression.ZLIB | FileCompression.DEFLATE>
    | 'none';
}

export interface Xml {
  type: FileFormatType.XML;
  root_tag: string;
  row_tag: string;
  compression: Exclude<FileCompression, FileCompression.ZLIB | FileCompression.DEFLATE> | 'none';
}
