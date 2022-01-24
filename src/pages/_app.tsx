import '~/styles/globals.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { DefaultLayout } from '~/components'

// eslint-disable-next-line import/no-default-export
export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <div className="font-mono text-white">
      <Head>
        <title>Lorenzo GM</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DefaultLayout header={pageProps.header}>
        <Component {...pageProps} />
      </DefaultLayout>
    </div>
  )
}
