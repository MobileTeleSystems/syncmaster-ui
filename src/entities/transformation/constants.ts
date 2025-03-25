import { createContext } from 'react';

import {
  ShowButtonsContextProps,
  TransformationFilterColumnsType,
  TransformationFilterFileType,
  TransformationFilterRowsType,
  Transformations,
  TransformationsForm,
  TransformationType,
} from './types';

const SHOW_BUTTONS_CONTEXT_INITIAL_VALUE: ShowButtonsContextProps = {
  isDisplayed: true,
};

export const ShowButtonsContext = createContext<ShowButtonsContextProps>(SHOW_BUTTONS_CONTEXT_INITIAL_VALUE);

export const TRANSFORMATIONS_FORM_DEFAULT_VALUE: TransformationsForm = {
  [TransformationType.FILTER_ROWS]: [],
  [TransformationType.FILTER_COLUMNS]: [],
  [TransformationType.FILTER_FILE]: [],
};

export const TRANSFORMATIONS_REQUEST_DEFAULT_VALUE: Transformations = [
  {
    type: TransformationType.FILTER_ROWS,
    filters: [],
  },
  {
    type: TransformationType.FILTER_COLUMNS,
    filters: [],
  },
  {
    type: TransformationType.FILTER_FILE,
    filters: [],
  },
];

export const TRANSFORMATION_FILTER_ROWS_TYPE_DISPLAY = {
  [TransformationFilterRowsType.IS_NULL]: 'isNull',
  [TransformationFilterRowsType.IS_NOT_NULL]: 'isNotNull',
  [TransformationFilterRowsType.EQUAL]: 'equal',
  [TransformationFilterRowsType.NOT_EQUAL]: 'notEqual',
  [TransformationFilterRowsType.GREATER_THAN]: 'greaterThan',
  [TransformationFilterRowsType.GREATER_OR_EQUAL]: 'greaterOrEqual',
  [TransformationFilterRowsType.LESS_THAN]: 'lessThan',
  [TransformationFilterRowsType.LESS_OR_EQUAL]: 'lessOrEqual',
  [TransformationFilterRowsType.LIKE]: 'like',
  [TransformationFilterRowsType.ILIKE]: 'iLike',
  [TransformationFilterRowsType.NOT_LIKE]: 'notLike',
  [TransformationFilterRowsType.NOT_ILIKE]: 'notILike',
  [TransformationFilterRowsType.REGEXP]: 'regexp',
} as const;

export const TRANSFORMATION_FILTER_COLUMNS_TYPE_DISPLAY = {
  [TransformationFilterColumnsType.CAST]: 'cast',
  [TransformationFilterColumnsType.INCLUDE]: 'include',
  [TransformationFilterColumnsType.RENAME]: 'rename',
} as const;

export const TRANSFORMATION_FILTER_FILE_TYPE_DISPLAY = {
  [TransformationFilterFileType.NAME_GLOB]: 'nameGlob',
  [TransformationFilterFileType.NAME_REGEXP]: 'nameRegexp',
  [TransformationFilterFileType.FILE_SIZE_MIN]: 'fileSizeMin',
  [TransformationFilterFileType.FILE_SIZE_MAX]: 'fileSizeMax',
} as const;
