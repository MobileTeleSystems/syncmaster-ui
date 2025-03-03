import { ConnectionSambaAuthType } from '@entities/connection';
import { prepareOptionsForSelect } from '@shared/ui';

export const CONNECTION_SAMBA_AUTH_TYPE_SELECT_OPTIONS = prepareOptionsForSelect<ConnectionSambaAuthType>({
  data: ['NTLMv1', 'NTLMv2'],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});
