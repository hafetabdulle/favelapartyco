import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: '#FDF8F0',
        'brazilian-green': {
          DEFAULT: '#009739',
          light: '#00B84A',
          dark: '#006B28',
        },
        'brazilian-yellow': {
          DEFAULT: '#FEDD00',
          light: '#FFF7CC',
          dark: '#E5C700',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F7',
          150: '#EDEDF0',
          200: '#E8E8ED',
          300: '#D2D2D7',
          400: '#B0B0B5',
          500: '#86868B',
          600: '#6E6E73',
          700: '#515154',
          800: '#3A3A3C',
          900: '#1D1D1F',
          950: '#111110',
        },
      },
      fontFamily: {
        display: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'system-ui', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
