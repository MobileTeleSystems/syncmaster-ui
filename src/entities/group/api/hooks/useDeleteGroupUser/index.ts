import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import { getErrorMessage } from '@shared/utils';

import { groupService } from '../../groupService';
import { GroupQueryKey } from '../../keys';
import { DeleteGroupUserRequest } from '../../types';

/** Hook for deleting user from group */
export const useDeleteGroupUser = (data: DeleteGroupUserRequest): UseMutationResult => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => groupService.deleteGroupUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GroupQueryKey.GET_GROUP_USERS, data.groupId] });
    },
    onError: (error) => {
      notification.error({
        message: getErrorMessage(error),
      });
    },
  });
};
