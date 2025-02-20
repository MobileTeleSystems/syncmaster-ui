import { SourceParamsProps } from '../../../SourceParams';
import { TargetParamsProps } from '../../../TargetParams';

export interface GetInitialNodesProps extends SourceParamsProps, TargetParamsProps {
  hasFilterRows: boolean;
  hasFilterColumns: boolean;
  hasFilterFile: boolean;
}
