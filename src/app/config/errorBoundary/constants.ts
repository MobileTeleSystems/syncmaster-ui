import { createContext } from 'react';

import { ErrorBoundaryContextProps } from './types';

export const ErrorBoundaryContext = createContext<ErrorBoundaryContextProps>({ resetErrorBoundary: () => {} });
