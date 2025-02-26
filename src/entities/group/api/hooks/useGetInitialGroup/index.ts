import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { GetGroupRequest, Group } from '../../types';
import { GroupQueryKey } from '../../keys';
import { groupService } from '../../groupService';

/** Hook for getting group info from backend */
export const useGetInitialGroup = ({ id }: GetGroupRequest): UseQueryResult<Group> => {
  return useQuery({
    queryKey: [GroupQueryKey.GET_GROUP, id],
    queryFn: () => groupService.getGroup({ id }),
    enabled: !!id,
    throwOnError: false,
  });
};
