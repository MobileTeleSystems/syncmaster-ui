import { createContext } from 'react';

import { AuthContextProps } from './types';

const AUTH_CONTEXT_INITIAL_VALUE: AuthContextProps = {
  id: 0,
  username: '',
  is_superuser: false,
};

export const AuthContext = createContext<AuthContextProps>(AUTH_CONTEXT_INITIAL_VALUE);
