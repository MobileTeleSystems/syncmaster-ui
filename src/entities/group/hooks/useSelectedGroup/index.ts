import { useContext } from 'react';

import { SelectedGroupContext } from '../../constants';

export const useSelectedGroup = () => useContext(SelectedGroupContext);
