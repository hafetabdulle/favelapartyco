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

        /* Warm paper tones — used instead of pure white / cool grays so the
           photography reads warmer and the page feels printed rather than UI. */
        cream: {
          DEFAULT: '#FBF8F3',
          deep: '#F5F0E7',
        },
        sand: {
          DEFAULT: '#E9E1D4',
          dark: '#D8CDBA',
        },
        ink: {
          DEFAULT: '#17150F',
          soft: '#3C382F',
          muted: '#6B6455',
          faint: '#9A9384',
        },

        'brazilian-green': {
          DEFAULT: '#009739',
          light: '#00B84A',
          dark: '#00702A',
          deep: '#053B21',
        },
        'brazilian-yellow': {
          DEFAULT: '#FEDD00',
          light: '#FFF7CC',
          dark: '#E5C700',
        },
        /* Sunset accent, for small highlights only. */
        sunset: {
          DEFAULT: '#E4703A',
          light: '#F6A374',
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
        display: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(23,21,15,0.04), 0 8px 24px -12px rgba(23,21,15,0.12)',
        lift: '0 2px 4px rgba(23,21,15,0.05), 0 24px 48px -20px rgba(23,21,15,0.25)',
        banner: '0 20px 60px -24px rgba(5,59,33,0.45)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
