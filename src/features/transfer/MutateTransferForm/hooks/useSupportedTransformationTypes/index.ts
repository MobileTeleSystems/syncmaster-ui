import { CONNECTION_TYPE_SUPPORT_TRANSFORMATION_TYPES } from '@entities/transformation';

import { useSelectConnectionType } from '../useSelectConnectionType';

/** Hook to get supported transformations for selected source */
export const useSupportedTransformationTypes = () => {
  const { selectedConnectionType } = useSelectConnectionType({
    connectionParamFieldName: 'source_params',
  });
  const supportedTransformationTypes = CONNECTION_TYPE_SUPPORT_TRANSFORMATION_TYPES[selectedConnectionType];

  return { supportedTransformationTypes };
};
