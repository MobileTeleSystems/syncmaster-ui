import React, { memo, PropsWithChildren, useState } from 'react';

import { Group } from '../../api';
import { SelectedGroupContext } from '../../constants';

export const SelectedGroupProvider = memo(({ children }: PropsWithChildren) => {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const contextValue = {
    group: selectedGroup,
    selectGroup: setSelectedGroup,
  };

  return <SelectedGroupContext.Provider value={contextValue}>{children}</SelectedGroupContext.Provider>;
});
