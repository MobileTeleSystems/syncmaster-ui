import { Group } from '@entities/group';
import { Queue } from '@entities/queue';
import { DescriptionsProps } from 'antd';

export interface QueueDetailInfoProps extends DescriptionsProps {
  queue: Queue;
  group: Group;
}
