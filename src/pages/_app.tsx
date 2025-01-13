import {AudioProvider} from '@/components/AudioProvider'
import {Layout} from '@/components/Layout'

import '@/styles/tailwind.css'
import 'focus-visible'

import {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
    return (
        <AudioProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AudioProvider>
    )
}
