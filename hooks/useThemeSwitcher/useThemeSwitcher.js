import { useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from '..';

const useThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [theme, setTheme] = useLocalStorage(
    'theme',
    isDarkTheme ? 'dark' : 'light',
  );

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkTheme(isDark);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => [theme, switchTheme], [theme]);
  return value;
};

export default useThemeSwitcher;
