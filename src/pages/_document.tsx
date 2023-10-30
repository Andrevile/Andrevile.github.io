import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head></Head>
      <body className="bg-light dark:bg-dark relative mx-auto px-16">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
