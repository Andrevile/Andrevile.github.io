import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head></Head>
      <body className="bg-light dark:bg-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
