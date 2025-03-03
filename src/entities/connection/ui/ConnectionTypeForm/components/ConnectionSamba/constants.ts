import { ConnectionSambaProtocol } from '@entities/connection/api';
import { prepareOptionsForSelect } from '@shared/ui';

export const CONNECTION_SAMBA_PROTOCOL_SELECT_OPTIONS = prepareOptionsForSelect<ConnectionSambaProtocol>({
  data: ['NetBIOS', 'SMB'],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});
