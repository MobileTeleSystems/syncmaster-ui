import React from 'react';
import { useTranslation } from 'react-i18next';

export const FileNameTemplateTooltipText = () => {
  const { t } = useTranslation('file');

  return (
    <>
      {t('useFollowingPlaceholders')} <br />
      <ul>
        <li>
          {`{index}`} - {t('required', { ns: 'shared' })}
        </li>
        <li>
          {`{extension}`} - {t('required', { ns: 'shared' })}
        </li>
        <li>{`{run_created_at}`}</li>
        <li>{`{run_id}`}</li>
      </ul>
      {t('lettersNumbersAndSymbols')} <br />
    </>
  );
};
