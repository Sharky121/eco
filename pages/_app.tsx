import 'modern-normalize/modern-normalize.css';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from "@/components/layout/layout";

const App = ({ Component, pageProps }: AppProps) => {
    console.log(pageProps);
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default App;