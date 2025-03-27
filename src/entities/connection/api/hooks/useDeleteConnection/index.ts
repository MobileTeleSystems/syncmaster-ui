import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import { getErrorMessage } from '@shared/config';
import { useTranslation } from 'react-i18next';

import { connectionService } from '../../connectionService';
import { DeleteConnectionRequest } from '../../types';
import { ConnectionQueryKey } from '../../keys';

/** Hook for deleting connection */
export const useDeleteConnection = (data: DeleteConnectionRequest): UseMutationResult => {
  const { t } = useTranslation('error');
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => connectionService.deleteConnection(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ConnectionQueryKey.GET_CONNECTIONS] });
      queryClient.removeQueries({ queryKey: [ConnectionQueryKey.GET_CONNECTION, data.id] });
      notification.success({
        message: t('deleteConnectionSuccess', { ns: 'connection' }),
      });
    },
    onError: (error) => {
      notification.error({
        message: getErrorMessage(error, t),
      });
    },
  });
};
