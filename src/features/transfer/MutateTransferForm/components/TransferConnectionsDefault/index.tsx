import React, { useMemo } from 'react';
import { Fieldset } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { SourceParams } from '../SourceParams';
import { TargetParams } from '../TargetParams';

import { TransferConnectionsDefaultProps } from './types';
import { FILTER_TYPES_CONFIG } from './constants';

export const TransferConnectionsDefault = ({ groupId }: TransferConnectionsDefaultProps) => {
  const { t } = useTranslation('connection');

  const filters = useMemo(
    () =>
      Object.entries(FILTER_TYPES_CONFIG).map(([key, { title, filter }]) => (
        <Fieldset key={key} title={t(title, { ns: 'transformation' })}>
          {filter}
        </Fieldset>
      )),
    [t],
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
