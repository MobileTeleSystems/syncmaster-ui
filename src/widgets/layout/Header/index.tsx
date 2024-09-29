import React from 'react';
import { Layout } from 'antd';

const { Header: AntdHeader } = Layout;

export const Header = () => {
  return (
    <AntdHeader className="header">
      <div className="logo" />
    </AntdHeader>
  );
};
