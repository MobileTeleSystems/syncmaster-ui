import { createContext } from 'react';

import { SensitiveFieldsContextProps } from './types';

const SENSITIVE_FIELDS_CONTEXT_INITIAL_VALUE: SensitiveFieldsContextProps = {
  isRequired: true,
};

export const MIN_ALLOWED_PORT = 1;
export const MAX_ALLOWED_PORT = 65535;

export const SensitiveFieldsContext = createContext<SensitiveFieldsContextProps>(
  SENSITIVE_FIELDS_CONTEXT_INITIAL_VALUE,
);
