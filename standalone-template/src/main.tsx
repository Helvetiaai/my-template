import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';
import theme from './theme';

// Load Inter font from CDN
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
document.head.appendChild(fontLink);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline is MUI's version of normalize.css */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
