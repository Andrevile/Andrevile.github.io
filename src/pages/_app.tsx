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
