import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import WeatherTheme from './mui-theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={WeatherTheme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
