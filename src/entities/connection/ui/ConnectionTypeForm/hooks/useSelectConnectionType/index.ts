import { ConnectionType } from '@shared/types';
import { useState } from 'react';

import { UseSelectConnectionTypeProps } from './types';

/** Hook for handling connection type state in connection form */
export const useSelectConnectionType = ({ initialType }: UseSelectConnectionTypeProps) => {
  const [selectedConnectionType, setConnectionType] = useState<ConnectionType | undefined>(initialType);

  const handleSelectConnectionType = (type: ConnectionType) => {
    setConnectionType(type);
  };

  return { selectedConnectionType, handleSelectConnectionType };
};
