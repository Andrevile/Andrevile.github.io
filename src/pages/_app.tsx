import '@/styles/global.css';
import 'dayjs/locale/ko';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import Fonts from '@/libs/components/html/style/Fonts';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Fonts />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
