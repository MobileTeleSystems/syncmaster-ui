import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-github_light_default';
import 'ace-builds/src-noconflict/ext-language_tools';

import { AceSqlEditorProps } from './types';
import { INITIAL_PROPS } from './constants';

/** SQL Editing Component */
export const AceSqlEditor = (props: AceSqlEditorProps) => {
  return <AceEditor theme="github_light_default" mode="sql" {...INITIAL_PROPS} {...props} />;
};
