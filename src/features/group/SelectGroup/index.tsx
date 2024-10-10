import React, { memo } from 'react';
import { Group, GroupQueryKey, groupService, useSelectedGroup } from '@entities/group';
import { ManagedSelect, OptionItem } from '@shared/ui';

export const SelectGroup = memo(() => {
  const { selectGroup } = useSelectedGroup();

  const handleSelectGroup = (_: string, option: OptionItem<Group>) => {
    selectGroup(option.data);
  };

  return (
    <ManagedSelect
      queryKey={[GroupQueryKey.GET_GROUPS]}
      queryFunction={groupService.getGroups}
      onSelect={handleSelectGroup}
      optionValue="id"
      optionLabel="name"
      placeholder={'Select group'}
    />
  );
});
