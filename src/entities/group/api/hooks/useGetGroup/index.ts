import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';

import { GetGroupRequest, Group } from '../../types';
import { GroupQueryKey } from '../../keys';
import { groupService } from '../../groupService';

/** Hook for getting group info from backend */
export const useGetGroup = ({ id }: GetGroupRequest): UseSuspenseQueryResult<Group> => {
  return useSuspenseQuery({
    queryKey: [GroupQueryKey.GET_GROUP, id],
    queryFn: () => groupService.getGroup({ id }),
  });
};
