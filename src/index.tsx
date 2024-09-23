import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import 'antd/dist/antd.css';
import '@app/styles/global.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
