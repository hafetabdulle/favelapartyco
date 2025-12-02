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
        // Brazilian-inspired color palette with high contrast
        brazilian: {
          green: {
            DEFAULT: '#009739', // Vibrant Brazilian green (dark enough for text)
            light: '#00B84A',   // Lighter green for backgrounds
            dark: '#006B28',    // Darker green for hover states
          },
          yellow: {
            DEFAULT: '#FEDD00', // Brazilian yellow
            light: '#FFF7CC',   // Very light yellow for backgrounds
            dark: '#E5C700',    // Darker yellow for borders
          },
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F7',
          200: '#E8E8ED',
          300: '#D2D2D7',
          400: '#B0B0B5',
          500: '#86868B',
          600: '#6E6E73',
          700: '#515154',
          800: '#3A3A3C',
          900: '#1D1D1F',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
