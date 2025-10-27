import { SourceParamsProps } from '../SourceParams';
import { TargetParamsProps } from '../TargetParams';

export interface TransferConnectionsDefaultProps extends SourceParamsProps, TargetParamsProps {}

type TitleType = 'filterRows' | 'filterColumns' | 'filterFile';

export interface FilterTypeConfig {
  title: TitleType;
  filter: React.JSX.Element;
}
