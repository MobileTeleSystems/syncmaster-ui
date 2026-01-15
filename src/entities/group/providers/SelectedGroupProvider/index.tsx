import React, { PropsWithChildren, useLayoutEffect, useState } from 'react';

import { Group, useGetInitialGroup } from '../../api';
import { SELECTED_GROUP_ID_LOCAL_STORAGE_KEY, SelectedGroupContext } from '../../constants';

export const SelectedGroupProvider = ({ children }: PropsWithChildren) => {
  const { data: initialGroup, isLoading } = useGetInitialGroup({
    id: Number(localStorage.getItem(SELECTED_GROUP_ID_LOCAL_STORAGE_KEY)),
  });

  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  useLayoutEffect(() => {
    if (initialGroup) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
    isLoading: !selectedGroup && isLoading,
    selectGroup: handleSelectGroup,
    cleanGroup: handleCleanGroup,
  };

  return <SelectedGroupContext.Provider value={contextValue}>{children}</SelectedGroupContext.Provider>;
};
