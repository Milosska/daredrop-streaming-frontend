import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Themes } from './styles/Themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Themes>
      <App />
    </Themes>
  </React.StrictMode>
);
