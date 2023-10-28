import { useTheme } from 'next-themes';

export const useDarkMode = () => {
  const { theme, setTheme } = useTheme();

  const setLightTheme = () => {
    setTheme('light');
  };

  const setDarkTheme = () => {
    setTheme('dark');
  };

  const toggleTheme = () => {
    if (theme === 'dark') {
      setLightTheme();
    }

    if (theme === 'light') {
      setDarkTheme();
    }
  };

  return {
    theme,
    setLightTheme,
    setDarkTheme,
    toggleTheme,
  };
};
