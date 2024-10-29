import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';

import { GetConnectionRequest, Connection } from '../../types';
import { ConnectionQueryKey } from '../../keys';
import { connectionService } from '../../connectionService';

/** Hook for getting connection info from backend */
export const useGetConnection = ({ id }: GetConnectionRequest): UseSuspenseQueryResult<Connection> => {
  return useSuspenseQuery({
    queryKey: [ConnectionQueryKey.GET_CONNECTION, id],
    queryFn: () => connectionService.getConnection({ id }),
  });
};
