import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#0c0e14" />
          <meta name="color-scheme" content="dark" />
          <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} sizes="any" />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`}
          />
          <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} />
          <link rel="manifest" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/site.webmanifest`} />
          <link rel="alternate" type="text/plain" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/llms.txt`} />
          <link
            rel="preload"
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/CalSans-SemiBold.ttf`}
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
