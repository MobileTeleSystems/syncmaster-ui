export enum TransformationType {
  ROWS_FILTER = 'dataframe_rows_filter',
}

export enum TransformationRowsFilterType {
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

interface TransformationRowsFilterNullable {
  type: Extract<
    TransformationRowsFilterType,
    TransformationRowsFilterType.IS_NULL | TransformationRowsFilterType.IS_NOT_NULL
  >;
  field: string;
}

interface TransformationRowsFilterDefault {
  type: Exclude<
    TransformationRowsFilterType,
    TransformationRowsFilterType.IS_NULL | TransformationRowsFilterType.IS_NOT_NULL
  >;
  field: string;
  value: string;
}

export interface TransformationRowsFilter {
  type: TransformationType.ROWS_FILTER;
  filters: Array<TransformationRowsFilterNullable | TransformationRowsFilterDefault>;
}

export type Transformations = Array<TransformationRowsFilter>;

export interface TransformationsForm {
  [TransformationType.ROWS_FILTER]?: TransformationRowsFilter['filters'];
}
