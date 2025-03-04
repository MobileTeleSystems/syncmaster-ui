import { createContext } from 'react';

import { ShowButtonsContextProps } from './types';

const SHOW_BUTTONS_CONTEXT_INITIAL_VALUE: ShowButtonsContextProps = {
  isDisplayed: true,
};

export const ShowButtonsContext = createContext<ShowButtonsContextProps>(SHOW_BUTTONS_CONTEXT_INITIAL_VALUE);
