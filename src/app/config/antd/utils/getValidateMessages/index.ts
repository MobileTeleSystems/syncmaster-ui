import { TFunction } from 'i18next';

export const getValidateMessages = (t: TFunction<'error'>) => {
  return {
    required: `${t('fieldIsRequired')}!`,
    pattern: { mismatch: `${t('fieldPatternInvalid')} \${pattern}` },
  };
};
