export enum TransformationType {
  FILTER_ROWS = 'dataframe_rows_filter',
  FILTER_COLUMNS = 'dataframe_columns_filter',
}

export enum TransformationFilterRowsType {
  IS_NULL = 'is_null',
  IS_NOT_NULL = 'is_not_null',
  EQUAL = 'equal',
  NOT_EQUAL = 'not_equal',
  GREATER_THAN = 'greater_than',
  GREATER_OR_EQUAL = 'greater_or_equal',
  LESS_THAN = 'less_than',
  LESS_OR_EQUAL = 'less_or_equal',
  LIKE = 'like',
  ILIKE = 'ilike',
  NOT_LIKE = 'not_like',
  NOT_ILIKE = 'not_ilike',
  REGEXP = 'regexp',
}

interface TransformationFilterRowsNullable {
  type: Extract<
    TransformationFilterRowsType,
    TransformationFilterRowsType.IS_NULL | TransformationFilterRowsType.IS_NOT_NULL
  >;
  field: string;
}

interface TransformationFilterRowsDefault {
  type: Exclude<
    TransformationFilterRowsType,
    TransformationFilterRowsType.IS_NULL | TransformationFilterRowsType.IS_NOT_NULL
  >;
  field: string;
  value: string;
}

export interface TransformationFilterRows {
  type: TransformationType.FILTER_ROWS;
  filters: Array<TransformationFilterRowsNullable | TransformationFilterRowsDefault>;
}

export enum TransformationFilterColumnsType {
  CAST = 'cast',
  INCLUDE = 'include',
  RENAME = 'rename',
}

interface TransformationFilterColumnsInclude {
  type: TransformationFilterColumnsType.INCLUDE;
  field: string;
}

interface TransformationFilterColumnsRename {
  type: TransformationFilterColumnsType.RENAME;
  field: string;
  to: string;
}

interface TransformationFilterColumnsCast {
  type: TransformationFilterColumnsType.CAST;
  field: string;
  as_type: string;
}

export interface TransformationFilterColumns {
  type: TransformationType.FILTER_COLUMNS;
  filters: Array<
    TransformationFilterColumnsInclude | TransformationFilterColumnsRename | TransformationFilterColumnsCast
  >;
}

export type Transformations = Array<TransformationFilterRows | TransformationFilterColumns>;

export interface TransformationsForm {
  [TransformationType.FILTER_ROWS]?: TransformationFilterRows['filters'];
  [TransformationType.FILTER_COLUMNS]?: TransformationFilterColumns['filters'];
}

export type TransformationsFormNestedType<T extends keyof TransformationsForm> =
  Required<TransformationsForm>[T][number]['type'];
