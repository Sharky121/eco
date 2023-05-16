import 'modern-normalize/modern-normalize.css';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (<Component {...pageProps} />);

export default App;
