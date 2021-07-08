import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <body>
          <Main />
          <NextScript />
          <script src="/js/bootstrap.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument
