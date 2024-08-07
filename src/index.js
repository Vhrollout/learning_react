// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/errorBoundery';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ErrorBoundary>
      <App /> 
  </ErrorBoundary>
);
