import React, { memo, PropsWithChildren } from 'react';

import { PageContentWrapperProps } from './types';
import * as classes from './styles.module.less';

export const PageContentWrapper = memo(
  ({ width = 'medium', gap = 'medium', children }: PropsWithChildren<PageContentWrapperProps>) => {
    return (
      <div className={classes.root} data-width={width} data-gap={gap}>
        {children}
      </div>
    );
  },
);
