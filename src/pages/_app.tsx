import '@/styles/global.css';
import 'dayjs/locale/ko';

import type { AppProps } from 'next/app';
import { createContext, useContext } from 'react';

const ThemeProviderContext = createContext({
  mode: 'light',
  toggleMode: () => {},
});

export const useThemeContext = () => useContext(ThemeProviderContext);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
