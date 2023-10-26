import { Head, Html, Main, NextScript } from 'next/document';

import DarkModeScript from '@/libs/common/components/html/script/DarkModeScript';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <DarkModeScript />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
