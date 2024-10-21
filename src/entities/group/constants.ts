import { createContext } from 'react';
import { UserRole } from '@shared/types';
import { prepareOptionsForSelect } from '@shared/ui';

import { SelectedGroupContextProps } from './types';

const SELECTED_GROUP_CONTEXT_INITIAL_VALUE: SelectedGroupContextProps = {
  group: null,
  selectGroup: () => undefined,
};

export const SelectedGroupContext = createContext<SelectedGroupContextProps>(SELECTED_GROUP_CONTEXT_INITIAL_VALUE);

export const USER_ROLE_IN_GROUP_SELECT_OPTIONS = prepareOptionsForSelect<keyof typeof UserRole>({
  data: ['Guest', 'Developer', 'Maintainer'],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});
