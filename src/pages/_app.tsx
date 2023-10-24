import 'dayjs/locale/ko';

import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { createContext, useContext } from 'react';

import { useDarkMode } from '@/libs/common/hooks/useDarkMode';
import { font } from '@/libs/common/styles/font';
import { globalStyle } from '@/libs/common/styles/global';
import { reset } from '@/libs/common/styles/reset';
import { theme } from '@/libs/common/styles/theme';

const ThemeProviderContext = createContext({
  mode: 'light',
  toggleMode: () => {},
});

export const useThemeContext = () => useContext(ThemeProviderContext);

export default function App({ Component, pageProps }: AppProps) {
  const { mode, toggleMode } = useDarkMode();

  return (
    <ThemeProviderContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme(mode)}>
        <Global styles={font} />
        <Global styles={reset} />
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  );
}
