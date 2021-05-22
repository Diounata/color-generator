import Head from 'next/head';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>color-generator</title>
                <link rel="shortcut icon" href="/palette.svg" type="image/x-icon" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
