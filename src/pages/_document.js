import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <noscript>This website needs JavaScript enabled on your browser.</noscript> 
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
