import { createContext } from 'react';

import { SelectedGroupContextProps } from './types';

const SELECTED_GROUP_CONTEXT_INITIAL_VALUE: SelectedGroupContextProps = {
  group: null,
  isLoading: true,
  selectGroup: () => undefined,
  cleanGroup: () => undefined,
};

export const SelectedGroupContext = createContext<SelectedGroupContextProps>(SELECTED_GROUP_CONTEXT_INITIAL_VALUE);

export const SELECTED_GROUP_ID_LOCAL_STORAGE_KEY = 'SELECTED_GROUP';
