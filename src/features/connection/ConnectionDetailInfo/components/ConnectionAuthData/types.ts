import { Connection } from '@entities/connection';
import { DescriptionsProps } from 'antd';

export interface ConnectionAuthDataProps extends DescriptionsProps {
  data: Connection['auth_data'];
}
