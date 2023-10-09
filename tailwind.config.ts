import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      colors: {
        neutralBg: 'hsl(var(--neutralBg) / <alpha-value>)',
        neutralText: 'hsl(var(--neutralText) / <alpha-value>)',
        onNeutralBg: 'hsl(var(--onNeutralBg) / <alpha-value>)',
        onNeutralText: 'hsl(var(--onNeutralText) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          50: 'hsl(var(--color-primary-50) / <alpha-value>)',
          100: 'hsl(var(--color-primary-100) / <alpha-value>)',
          200: 'hsl(var(--color-primary-200) / <alpha-value>)',
          300: 'hsl(var(--color-primary-300) / <alpha-value>)',
          400: 'hsl(var(--color-primary-400) / <alpha-value>)',
          500: 'hsl(var(--color-primary-500) / <alpha-value>)',
          600: 'hsl(var(--color-primary-600) / <alpha-value>)',
          700: 'hsl(var(--color-primary-700) / <alpha-value>)',
          800: 'hsl(var(--color-primary-800) / <alpha-value>)',
          900: 'hsl(var(--color-primary-900) / <alpha-value>)',
          950: 'hsl(var(--color-primary-950) / <alpha-value>)',
        },
        primaryActive: 'hsl(var(--primaryActive) / <alpha-value>)',
        primaryBg: 'hsl(var(--primaryBg) / <alpha-value>)',
        primaryText: 'hsl(var(--primaryText) / <alpha-value>)',
        primaryTextNeutral: 'hsl(var(--primaryTextNeutral) / <alpha-value>)',
        primaryTextHover: 'hsl(var(--primaryTextHover) / <alpha-value>)',
        onPrimaryBg: 'hsl(var(--onPrimaryBg) / <alpha-value>)',
        onPrimaryText: 'hsl(var(--onPrimaryText) / <alpha-value>)',
        ringColor: 'hsl(var(--ringColor) / <alpha-value>)',
        onRingColor: 'hsl(var(--onRingColor) / <alpha-value>)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
