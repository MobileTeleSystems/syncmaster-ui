import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import 'antd/dist/antd.less';
import '@app/styles/antd.less';
import '@app/styles/global.less';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
