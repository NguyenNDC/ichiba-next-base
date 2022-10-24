import React, { createContext } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'dark';
};

export const ThemeContext = createContext<any>({ theme: 'light', undefined });

interface Props {
  initialTheme?: string;
  children: React.ReactNode;
}

export default function ThemeProvider({ initialTheme, children }: Props) {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;

    root.setAttribute('dark-theme', theme);

    localStorage.setItem('color-theme', theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
