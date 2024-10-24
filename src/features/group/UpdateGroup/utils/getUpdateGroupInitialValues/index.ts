import { GroupData } from '@entities/group';

import { UpdateGroupForm } from '../../types';

export const getUpdateGroupInitialValues = (group: GroupData): UpdateGroupForm => {
  return {
    name: group.name,
    description: group.description,
    owner_id: group.owner_id,
  };
};
