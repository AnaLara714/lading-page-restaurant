import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LandingPage } from './pages/LandingPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);

reportWebVitals();
