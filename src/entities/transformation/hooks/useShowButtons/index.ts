import { useContext } from 'react';

import { ShowButtonsContext } from '../../constants';

export const useShowButtons = () => useContext(ShowButtonsContext);
