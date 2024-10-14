import React, { memo } from 'react';
import { GroupFromList, GroupQueryKey, groupService, useSelectedGroup } from '@entities/group';
import { ManagedSelect, OptionItem } from '@shared/ui';

export const SelectGroup = memo(() => {
  const { group: selectedGroup, selectGroup } = useSelectedGroup();

  const handleSelectGroup = (value: number, option: OptionItem<GroupFromList>) => {
    selectGroup(option.data);
  };

  return (
    <ManagedSelect
      queryKey={[GroupQueryKey.GET_GROUPS]}
      queryFunction={groupService.getGroups}
      value={selectedGroup?.data.id}
      onSelect={handleSelectGroup}
      renderOptionLabel={(group) => group.data.name}
      renderOptionValue={(group) => group.data.id}
      placeholder="Select group"
    />
  );
});
