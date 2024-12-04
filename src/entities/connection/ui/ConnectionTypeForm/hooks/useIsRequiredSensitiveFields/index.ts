import { useContext } from 'react';

import { SensitiveFieldsContext } from '../../constants';

export const useSensitiveFields = () => useContext(SensitiveFieldsContext);
