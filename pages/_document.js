import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Tweet Thread Generator" key="title"/>
        <meta property="og:description" content="Make yoru tweets go viral!" key="description"/>
        <meta
          property="og:image"
          content="https://media.discordapp.net/attachments/1046841725127250000/1049556132122873926/Screenshot_2022-12-05_at_9.20.40_PM.png?width=810&height=696"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
