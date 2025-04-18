import React from 'react';
import { Group, GroupQueryKey, groupService, useSelectedGroup } from '@entities/group';
import { ManagedSelect, OptionItem } from '@shared/ui';
import { useTranslation } from 'react-i18next';

export const SelectGroup = () => {
  const { t } = useTranslation('group');
  const { group: selectedGroup, selectGroup } = useSelectedGroup();

  const handleSelectGroup = (value: number, option: OptionItem<Group>) => {
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
      detailQueryKey={[GroupQueryKey.GET_GROUP]}
      detailQueryFunction={(value) => groupService.getGroup({ id: value })}
      placeholder={t('selectGroup')}
    />
  );
};
