import React, { PropsWithChildren, useState } from 'react';

import { getInitialSelectedGroup } from '../../utils';
import { Group } from '../../api';
import { SELECTED_GROUP_LOCAL_STORAGE_KEY, SelectedGroupContext } from '../../constants';

export const SelectedGroupProvider = ({ children }: PropsWithChildren) => {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(() => getInitialSelectedGroup());

  const handleSelectGroup = (group: Group) => {
    setSelectedGroup(group);
    localStorage.setItem(SELECTED_GROUP_LOCAL_STORAGE_KEY, JSON.stringify(group));
  };

  const handleCleanGroup = () => {
    setSelectedGroup(null);
    localStorage.removeItem(SELECTED_GROUP_LOCAL_STORAGE_KEY);
  };

  const contextValue = {
    group: selectedGroup,
    selectGroup: handleSelectGroup,
    cleanGroup: handleCleanGroup,
  };

  return <SelectedGroupContext.Provider value={contextValue}>{children}</SelectedGroupContext.Provider>;
};
