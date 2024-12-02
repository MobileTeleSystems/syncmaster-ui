import { ConnectionType } from '@shared/types';
import { prepareOptionsForSelect } from '@shared/ui';

import { ConnectionBucketStyle, ConnectionProtocol } from './api';

export const CONNECTION_TYPE_SELECT_OPTIONS = prepareOptionsForSelect<ConnectionType>({
  data: Object.values(ConnectionType),
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

export const CONNECTION_BUCKET_STYLE_SELECT_OPTIONS = prepareOptionsForSelect<ConnectionBucketStyle>({
  data: ['domain', 'path'],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

export const CONNECTION_PROTOCOL_SELECT_OPTIONS = prepareOptionsForSelect<ConnectionProtocol>({
  data: ['https', 'http'],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});
