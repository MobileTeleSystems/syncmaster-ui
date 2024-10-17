import React, { memo, PropsWithChildren } from 'react';

import { PageContentWrapperProps } from './types';
import classes from './styles.module.less';

export const PageContentWrapper = memo(({ width = 'medium', children }: PropsWithChildren<PageContentWrapperProps>) => {
  return (
    <div className={classes.root} data-width={width}>
      {children}
    </div>
  );
});
