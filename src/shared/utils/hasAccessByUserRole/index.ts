import { UserRole } from '@shared/types';

/**
 * Util for check access user by his role in application
 *
 * @param accessRole - Minimum role rank for access.
 * @param currentRole - Role for checking access.
 *
 * @returns - Role access check result
 */
export const hasAccessByUserRole = (accessRole: UserRole, currentRole: keyof typeof UserRole): boolean => {
  return UserRole[currentRole] >= accessRole;
};
