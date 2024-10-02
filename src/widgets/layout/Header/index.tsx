import React, { memo } from 'react';
import { Layout } from 'antd';

const { Header: AntdHeader } = Layout;

export const Header = memo(() => {
  return (
    <AntdHeader className="header">
      <div className="logo" />
    </AntdHeader>
  );
});
