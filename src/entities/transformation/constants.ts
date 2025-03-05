import { createContext } from 'react';

import { ShowButtonsContextProps, Transformations, TransformationsForm, TransformationType } from './types';

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
