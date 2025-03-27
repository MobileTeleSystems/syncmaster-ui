import { UserRole } from '@shared/types';

export const USER_ROLE_DISPLAY = {
  [UserRole.GUEST]: 'guest',
  [UserRole.DEVELOPER]: 'developer',
  [UserRole.MAINTAINER]: 'maintainer',
  [UserRole.OWNER]: 'owner',
  [UserRole.SUPERUSER]: 'superuser',
} as const;
