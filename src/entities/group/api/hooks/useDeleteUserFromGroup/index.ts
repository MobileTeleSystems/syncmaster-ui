import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';

import { groupService } from '../../groupService';
import { GroupQueryKey } from '../../keys';

import { UseDeleteUserFromGroupProps } from './types';

/** Hook for deleting user from group */
export const useDeleteUserFromGroup = (data: UseDeleteUserFromGroupProps): UseMutationResult => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => groupService.deleteUserFromGroup(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GroupQueryKey.GET_USERS_IN_GROUP, data.groupId] });
    },
  });
};
