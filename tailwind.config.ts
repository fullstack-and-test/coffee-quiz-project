import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Comic Neue', 'Fredoka', 'sans-serif'],
        sans: ['Fredoka', 'Comic Neue', 'sans-serif'],
      },
      colors: {
        bold: {
          light: '#a855f7',
          DEFAULT: '#9333ea',
          dark: '#6b21a8',
        },
        sweet: {
          light: '#f472b6',
          DEFAULT: '#ec4899',
          dark: '#be185d',
        },
        health: {
          light: '#22d3ee',
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
        },
        indulgent: {
          light: '#fbbf24',
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
      },
      gradientColorStops: {
        'bold-start': '#a855f7',
        'bold-end': '#f472b6',
        'sweet-start': '#22d3ee',
        'sweet-end': '#3b82f6',
        'health-start': '#4ade80',
        'health-end': '#14b8a6',
        'indulgent-start': '#fbbf24',
        'indulgent-end': '#f97316',
      },
      backgroundImage: {
        'gradient-bold': 'linear-gradient(to right, #a855f7, #f472b6)',
        'gradient-sweet': 'linear-gradient(to right, #22d3ee, #3b82f6)',
        'gradient-health': 'linear-gradient(to right, #4ade80, #14b8a6)',
        'gradient-indulgent': 'linear-gradient(to right, #fbbf24, #f97316)',
      },
    },
  },
  plugins: [],
};

export default config;
