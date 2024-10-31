import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';

import { transferService } from '../../transferService';
import { GetTransferRequest, Transfer } from '../../types';
import { TransferQueryKey } from '../../keys';

/** Hook for getting transfer info from backend */
export const useGetTransfer = ({ id }: GetTransferRequest): UseSuspenseQueryResult<Transfer> => {
  return useSuspenseQuery({
    queryKey: [TransferQueryKey.GET_TRANSFER, id],
    queryFn: () => transferService.getTransfer({ id }),
  });
};
