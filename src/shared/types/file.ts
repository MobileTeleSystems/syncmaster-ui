export enum FileFormatType {
  CSV = 'csv',
  JSON = 'json',
  JSON_LINE = 'jsonline',
}

export type FileFormat = FileFormatCsv | FileFormatJson | FileFormatJsonLine;

export interface FileFormatCsv {
  type: FileFormatType.CSV;
  delimiter: string;
  encoding: string;
  quote: string;
  escape: string;
  header: boolean;
  line_sep: string;
}

export interface FileFormatJson {
  type: FileFormatType.JSON;
  encoding: string;
  line_sep: string;
}

export interface FileFormatJsonLine {
  type: FileFormatType.JSON_LINE;
  encoding: string;
  line_sep: string;
}
