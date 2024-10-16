import { UserInGroup } from '@entities/group';

import { UpdateUserInGroupForm } from '../../types';

export const getUpdateUserInGroupInitialValues = (user: UserInGroup): UpdateUserInGroupForm => {
  return {
    userId: user.id,
    role: user.role,
  };
};
