import React, { PropsWithChildren, useState } from 'react';

import { Group } from '../../api';
import { SelectedGroupContext } from '../../constants';

export const SelectedGroupProvider = ({ children }: PropsWithChildren) => {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const contextValue = {
    group: selectedGroup,
    selectGroup: setSelectedGroup,
    cleanGroup: () => setSelectedGroup(null),
  };

  return <SelectedGroupContext.Provider value={contextValue}>{children}</SelectedGroupContext.Provider>;
};
