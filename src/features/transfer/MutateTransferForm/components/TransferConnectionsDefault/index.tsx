import React from 'react';
import { Fieldset } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { SourceParams } from '../SourceParams';
import { TargetParams } from '../TargetParams';

import { TransferConnectionsDefaultProps } from './types';

export const TransferConnectionsDefault = ({ groupId }: TransferConnectionsDefaultProps) => {
  const { t } = useTranslation('connection');

  return (
    <>
      <Fieldset title={t('sourceConnection')}>
        <SourceParams groupId={groupId} />
      </Fieldset>
      <Fieldset title={t('targetConnection')}>
        <TargetParams groupId={groupId} />
      </Fieldset>
    </>
  );
};
