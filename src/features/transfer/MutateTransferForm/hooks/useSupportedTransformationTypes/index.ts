import { CONNECTION_TYPE_SUPPORT_TRANSFORMATION_TYPES, DEFAULT_TRANSFORMATION_TYPES } from '@entities/transformation';

import { useSelectConnectionType } from '../useSelectConnectionType';

/** Hook to get supported transformations for selected source */
export const useSupportedTransformationTypes = () => {
  const { selectedConnectionType } = useSelectConnectionType({
    connectionParamFieldName: 'source_params',
  });

  const supportedTransformationTypes = selectedConnectionType
    ? CONNECTION_TYPE_SUPPORT_TRANSFORMATION_TYPES[selectedConnectionType]
    : DEFAULT_TRANSFORMATION_TYPES;

  return { supportedTransformationTypes };
};
