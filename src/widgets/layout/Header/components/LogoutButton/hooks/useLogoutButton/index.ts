import { useLogout, useKeycloakLogout } from '@entities/auth';
import { useSelectedGroup } from '@entities/group';
import { AUTH_PROVIDER, AuthProviderType } from '@shared/constants';

export const useLogoutButton = () => {
  const logout = useLogout();
  const { mutate: logoutKeycloak, isPending } = useKeycloakLogout();
  const { cleanGroup } = useSelectedGroup();

  const handleLogout = () => {
    cleanGroup();
    logout();
  };

  const handleKeycloakLogout = () => {
    logoutKeycloak(null, {
      onSuccess: handleLogout,
    });
  };

  const handleClick = () => {
    if (AUTH_PROVIDER === AuthProviderType.DUMMY) {
      handleLogout();
    } else {
      handleKeycloakLogout();
    }
  };

  return { handleClick, isPending };
};
