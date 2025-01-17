import React, { PropsWithChildren, useEffect, useState } from 'react';

import { Group, useGetInitialGroup } from '../../api';
import { SELECTED_GROUP_ID_LOCAL_STORAGE_KEY, SelectedGroupContext } from '../../constants';

export const SelectedGroupProvider = ({ children }: PropsWithChildren) => {
  const { data: initialGroup } = useGetInitialGroup({
    id: Number(localStorage.getItem(SELECTED_GROUP_ID_LOCAL_STORAGE_KEY)),
  });

  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  useEffect(() => {
    if (initialGroup) {
      setSelectedGroup(initialGroup);
    }
  }, [initialGroup]);

  const handleSelectGroup = (group: Group) => {
    setSelectedGroup(group);
    localStorage.setItem(SELECTED_GROUP_ID_LOCAL_STORAGE_KEY, group.data.id.toString());
  };

  const handleCleanGroup = () => {
    setSelectedGroup(null);
    localStorage.removeItem(SELECTED_GROUP_ID_LOCAL_STORAGE_KEY);
  };

  const contextValue = {
    group: selectedGroup,
    selectGroup: handleSelectGroup,
    cleanGroup: handleCleanGroup,
  };

  return <SelectedGroupContext.Provider value={contextValue}>{children}</SelectedGroupContext.Provider>;
};
