import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
