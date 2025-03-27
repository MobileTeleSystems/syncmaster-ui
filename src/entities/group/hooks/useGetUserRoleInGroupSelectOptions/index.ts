import { USER_ROLE_DISPLAY } from '@shared/constants';
import { UserRole } from '@shared/types';
import { prepareOptionsForSelect } from '@shared/ui';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useGetUserRoleInGroupSelectOptions = () => {
  const { t } = useTranslation('auth');

  return useMemo(() => {
    return prepareOptionsForSelect({
      data: [UserRole.GUEST, UserRole.DEVELOPER, UserRole.MAINTAINER],
      renderLabel: (data) => t(USER_ROLE_DISPLAY[data]),
      renderValue: (data) => data,
    });
  }, [t]);
};
