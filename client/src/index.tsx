import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
// import ErrorBoundary from './components/ErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <ErrorBoundary withGoButton={false}> */}
        <App />
      {/* </ErrorBoundary> */}
    </PersistGate>
  </Provider>
);