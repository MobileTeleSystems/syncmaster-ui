import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';

import { authService } from '../../authService';
import { KeycloakCallbackRequest } from '../../types';
import { AuthQueryKey } from '../../keys';

/** Hook for getting auth tokens from keycloak callback from backend */
export const useKeycloakCallback = (params: KeycloakCallbackRequest): UseSuspenseQueryResult<null> => {
  return useSuspenseQuery({
    queryKey: [AuthQueryKey.KEYCLOAK_CALLBACK],
    queryFn: () => authService.keycloakCallback(params),
    gcTime: 0,
  });
};
