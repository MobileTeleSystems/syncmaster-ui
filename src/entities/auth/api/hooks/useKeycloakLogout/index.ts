import { UseMutationResult, useMutation } from '@tanstack/react-query';

import { authService } from '../../authService';

/** Hook for logout from keycloak */
export const useKeycloakLogout = (): UseMutationResult<null> => {
  return useMutation({
    mutationFn: authService.keycloakLogout,
    throwOnError: true,
  });
};
