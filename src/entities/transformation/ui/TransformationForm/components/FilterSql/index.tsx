import { AceSqlEditor } from '@shared/ui/AceSqlEditor';
import { getCountLines } from '@shared/utils';

import { FilterSqlProps } from './types';
import { FONT_SIZE, LINE_HEIGHT, WIDTH } from './constants';
import * as classes from './styles.module.less';

export const FilterSql = ({ autoHeightMaxLineCount, value, onChange }: FilterSqlProps) => {
  /** Calc the number of lines in the SQL expression to set the height of the editor */
  const linesCount = Math.max(1, getCountLines(value as string));
  const heightLinesCount = autoHeightMaxLineCount ? Math.min(linesCount, autoHeightMaxLineCount) : linesCount;

  return (
    <AceSqlEditor
      className={classes.root}
      tabSize={2}
      fontSize={`${FONT_SIZE}em`}
      width={WIDTH}
      height={`${heightLinesCount * LINE_HEIGHT + 0.2}em`}
      lineHeight={`${LINE_HEIGHT}em`}
      value={value}
      onChange={onChange}
    />
  );
};
