import Head from 'next/head';

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>podcast allegro.tech</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App;