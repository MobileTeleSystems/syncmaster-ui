import React from 'react';
import { useTranslation } from 'react-i18next';

import { TooltipTextProps } from './types';

export const TooltipText = ({ minValue, maxValue }: TooltipTextProps) => {
  const { t } = useTranslation('transfer');

  return (
    <>
      <p>
        {t('minValue')} = {minValue}
      </p>
      <p>
        {t('maxValue')} = {maxValue}
      </p>
    </>
  );
};
