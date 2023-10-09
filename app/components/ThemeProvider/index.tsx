'use client';

import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

import { ThemeModes, ThemeProviderProps } from '@/app/types/theme-provider';
import { ButtonToTop } from '@/app/components/Button/Top';

const getSystemTheme = () => {
  const event = window.matchMedia('(prefers-color-scheme: dark)');

  const isDark = event.matches;
  const systemTheme = isDark ? 'dark' : 'light';

  return systemTheme;
};

function useStickyState(
  defaultValue: string | undefined,
  key: string,
): [string | undefined, (v: string) => void] {
  const [value, setValue] = useState<string | undefined>(defaultValue);

  useEffect(() => {
    const stickyValue = localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(stickyValue);
    } else {
      const systemTheme = getSystemTheme();
      localStorage.setItem(key, systemTheme);
      setValue(systemTheme);
    }
  }, [key, setValue]);

  return [
    value,
    (v: string) => {
      localStorage.setItem(key, v);
      setValue(v);
    },
  ];
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const [themeMode, setThemeMode] = useStickyState(
    ThemeModes.dark,
    'theme-mode',
  );

  return (
    <body
      className={[
        'w-full min-h-screen flex flex-col items-center bg-primaryBg',
        themeMode && `theme-${themeMode}`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <button
        className="w-fit fixed bottom-2 right-2 lg:bottom-auto lg:right-5 lg:top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 text-onPrimaryBg z-50"
        onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
      >
        {themeMode === 'dark' ? <BsSun /> : <BsMoon />}
      </button>

      {props.children}

      <ButtonToTop />
    </body>
  );
};
