import { ConnectionType } from '@shared/types';

export interface ConnectionTypeFormProps {
  initialType?: ConnectionType;
  isRequiredSensitiveFields?: boolean;
}

export interface SensitiveFieldsContextProps {
  isRequired: boolean;
}
