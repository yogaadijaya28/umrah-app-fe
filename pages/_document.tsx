import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/assets/icon/favicon.ico" />
            </Head>
            <body className='scrollbar'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}