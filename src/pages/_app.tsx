import '../../assets/css/globals.css';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../layouts';
import { Provider } from 'react-redux';
import ThemeProvider from '../context/theme/themeContext';
import { persistor, store } from 'src/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {() => (
          <ThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        )}
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
