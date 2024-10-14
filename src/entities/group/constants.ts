import { createContext } from 'react';

import { SelectedGroupContextProps } from './types';

const SELECTED_GROUP_CONTEXT_INITIAL_VALUE: SelectedGroupContextProps = {
  group: null,
  selectGroup: () => undefined,
};

export const SelectedGroupContext = createContext<SelectedGroupContextProps>(SELECTED_GROUP_CONTEXT_INITIAL_VALUE);
