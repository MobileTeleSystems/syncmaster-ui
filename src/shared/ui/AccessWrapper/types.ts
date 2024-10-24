import { UserRole } from '@shared/types';

export interface AccessWrapperProps {
  accessRole: UserRole;
  currentRole?: keyof typeof UserRole;
}
