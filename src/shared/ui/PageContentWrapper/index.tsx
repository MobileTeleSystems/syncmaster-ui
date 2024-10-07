import React, { PropsWithChildren } from 'react';

import classes from './styles.module.less';

export const PageContentWrapper = ({ children }: PropsWithChildren) => {
  return <div className={classes.root}>{children}</div>;
};
