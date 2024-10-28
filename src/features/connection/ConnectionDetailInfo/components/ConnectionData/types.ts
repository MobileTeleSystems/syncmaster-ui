import { Connection } from '@entities/connection';
import { DescriptionsProps } from 'antd';

export interface ConnectionDataProps extends DescriptionsProps {
  data: Connection['connection_data'];
}
