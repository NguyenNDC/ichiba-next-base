import '../../assets/css/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layouts';
import { Provider } from 'react-redux';
import { wrapper } from '../store/store';
import { ThemeProvider } from '../context/theme/themeContext';


import '../locale/i18n';

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
