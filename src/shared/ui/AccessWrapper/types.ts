import { UserRole } from '@shared/types';

export interface AccessWrapperProps {
  accessRole: UserRole;
  currentRole?: UserRole;
}
