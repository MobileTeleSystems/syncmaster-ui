import React, { memo, PropsWithChildren } from 'react';
import { Spin } from 'antd';

import { useMe } from '../../api';
import { AuthContext } from '../../constants';

import classes from './styles.module.less';

export const AuthProvider = memo(({ children }: PropsWithChildren) => {
  const { data, isLoading } = useMe();

  if (isLoading || !data) {
    return (
      <div className={classes.loader}>
        <Spin size="large" />
      </div>
    );
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
});
