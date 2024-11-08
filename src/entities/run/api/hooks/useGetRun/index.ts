import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';

import { GetRunRequest, Run } from '../../types';
import { RunQueryKey } from '../../keys';
import { runService } from '../../runService';

/** Hook for getting run info from backend */
export const useGetRun = ({ id }: GetRunRequest): UseSuspenseQueryResult<Run> => {
  return useSuspenseQuery({
    queryKey: [RunQueryKey.GET_RUN, id],
    queryFn: () => runService.getRun({ id }),
  });
};
