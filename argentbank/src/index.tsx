import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { store } from './utils/reduxService';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';

import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
