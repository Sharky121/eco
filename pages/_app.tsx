import 'modern-normalize/modern-normalize.css';
import '@/styles/globals.scss';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey="6LfyrmkmAAAAAPHvhpfMWlUR-4O80XTqSC2XiGU5"
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            <Component {...pageProps} />
        </GoogleReCaptchaProvider>
    )
};

export default App;
