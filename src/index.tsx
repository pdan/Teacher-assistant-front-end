import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import Routes from './routes';
import './i18n';

const language: string = localStorage.getItem('language') || 'en';

ReactDOM.render(
    <ConfigProvider direction={language === 'fa' ? 'rtl' : 'ltr'}>
        <Routes />
    </ConfigProvider>
    , document.getElementById('root')
)