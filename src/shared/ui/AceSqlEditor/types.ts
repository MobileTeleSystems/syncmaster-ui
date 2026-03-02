import { IAceEditorProps } from 'react-ace';

/** Type of SQL editing component props */
export type AceSqlEditorProps = Omit<IAceEditorProps, 'mode' | 'theme'>;
