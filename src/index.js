import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { Themes } from './styles/Themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/daredrop-streaming-frontend">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Themes>
            <App />
          </Themes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
