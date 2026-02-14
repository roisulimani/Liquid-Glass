import { useEffect, useState } from 'react';

export type LiquidTheme = 'light' | 'dark';

export function useTheme(defaultTheme: LiquidTheme = 'light') {
  const [theme, setTheme] = useState<LiquidTheme>(defaultTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
  }, [theme]);

  return { theme, setTheme };
}
