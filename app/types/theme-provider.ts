interface ValueObject {
  [themeName: string]: string;
}

export enum ThemeModes {
  light = 'light',
  dark = 'dark',
}

export interface ThemeContextProps {
  themes: string[];
  forcedTheme?: string | undefined;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme?: string | undefined;
  resolvedTheme?: string | undefined;
  systemTheme?: 'dark' | 'light' | undefined;
}

export interface ThemeProviderProps {
  themes?: string[] | undefined;
  forcedTheme?: string | undefined;
  enableSystem?: boolean | undefined;
  disableTransitionOnChange?: boolean | undefined;
  enableColorScheme?: boolean | undefined;
  storageKey?: string | undefined;
  defaultTheme?: string | undefined;
  attribute?: string | 'class' | undefined;
  value?: ValueObject | undefined;
  nonce?: string | undefined;
  children?: React.ReactNode;
}
