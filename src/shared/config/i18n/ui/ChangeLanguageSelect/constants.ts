import { prepareOptionsForSelect } from '../../../../ui/ManagedSelect/utils';
import { Language } from '../../types';

const LANGUAGE_DISPLAY = {
  [Language.EN]: 'EN',
  [Language.RU]: 'RU',
};

export const LANGUAGE_SELECT_OPTIONS = prepareOptionsForSelect({
  data: Object.values(Language),
  renderLabel: (data) => LANGUAGE_DISPLAY[data],
  renderValue: (data) => data,
});
