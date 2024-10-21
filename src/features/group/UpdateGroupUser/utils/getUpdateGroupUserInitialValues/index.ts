import { GroupUser } from '@entities/group';

import { UpdateGroupUserForm } from '../../types';

export const getUpdateGroupUserInitialValues = (user: GroupUser): UpdateGroupUserForm => {
  return {
    role: user.role,
  };
};
