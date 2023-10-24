import { useEffect, useState } from 'react';

import { ThemeMode } from '../types/types';

export const useDarkMode = () => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const handleThemeMode = (mode: ThemeMode) => {
    window.localStorage.setItem('theme', mode);
    document.documentElement.setAttribute('data-theme', mode);
    setMode(mode);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      handleThemeMode('dark');
    }

    if (mode === 'dark') {
      handleThemeMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as ThemeMode;
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    if (!localTheme && matches) {
      handleThemeMode('dark');
      return;
    }

    if (localTheme) {
      handleThemeMode(localTheme);
    }
  }, []);

  return {
    mode,
    toggleMode,
  };
};
