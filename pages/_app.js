import "../styles/globals.scss";
import Head from "next/head";
import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
    return (
        <SimpleReactLightbox>
            <Head>
                <link rel="shortcut icon" href="favicon.ico" />
            </Head>

            <Component {...pageProps} />
        </SimpleReactLightbox>
    );
}

export default MyApp;
