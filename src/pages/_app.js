/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
// import App from 'next/app';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '../store/store';

function MyApp({ Component, pageProps }) {
  const store = useStore(state => state);
  return process.browser ? (
    <PersistGate persistor={store.__persistor} loading>
      <Component {...pageProps} />
    </PersistGate>
  ) : (
    <PersistGate persistor={store}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
