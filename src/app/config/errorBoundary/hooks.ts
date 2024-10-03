import { useContext } from 'react';

import { ErrorBoundaryContext } from './constants';

export const useErrorBoundaryContext = () => useContext(ErrorBoundaryContext);
