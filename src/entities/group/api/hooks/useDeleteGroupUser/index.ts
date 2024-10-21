import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';

import { groupService } from '../../groupService';
import { GroupQueryKey } from '../../keys';

import { UseDeleteGroupUserProps } from './types';

/** Hook for deleting user from group */
export const useDeleteGroupUser = (data: UseDeleteGroupUserProps): UseMutationResult => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => groupService.deleteGroupUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GroupQueryKey.GET_GROUP_USERS, data.groupId] });
    },
  });
};
