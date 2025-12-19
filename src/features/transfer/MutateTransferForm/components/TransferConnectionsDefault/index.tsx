import { useMemo } from 'react';
import { Fieldset } from '@shared/ui';
import { useTranslation } from 'react-i18next';
import { TransformationType } from '@entities/transformation';

import { SourceParams } from '../SourceParams';
import { TargetParams } from '../TargetParams';
import { useSupportedTransformationTypes } from '../../hooks';

import { TransferConnectionsDefaultProps } from './types';
import { FILTER_TYPES_CONFIG } from './constants';

export const TransferConnectionsDefault = ({ groupId }: TransferConnectionsDefaultProps) => {
  const { t } = useTranslation('transfer');
  const { supportedTransformationTypes } = useSupportedTransformationTypes();

  const filters = useMemo(
    () =>
      Object.entries(FILTER_TYPES_CONFIG)
        .filter(([key]) => supportedTransformationTypes.includes(key as TransformationType))
        .map(([key, { title, filter }]) => (
          <Fieldset key={key} title={t(title, { ns: 'transformation' })}>
            {filter}
          </Fieldset>
        )),
    [supportedTransformationTypes, t],
  );

  return (
    <>
      <Fieldset title={t('sourceConnection')}>
        <SourceParams groupId={groupId} />
      </Fieldset>
      {filters}
      <Fieldset title={t('targetConnection')}>
        <TargetParams groupId={groupId} />
      </Fieldset>
    </>
  );
};
