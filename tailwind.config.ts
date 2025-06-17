import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PEBBLE color palette
        pebble: {
          dark: '#433E49',      // Dark gray
          medium: '#928490',    // Medium gray  
          light: '#DBC1AD',     // Light beige
          lighter: '#F3E8EB',   // Very light pink/beige
        },
        primary: {
          50: '#F3E8EB',
          100: '#F3E8EB',
          200: '#DBC1AD',
          300: '#DBC1AD',
          400: '#928490',
          500: '#928490',
          600: '#433E49',
          700: '#433E49',
          800: '#433E49',
          900: '#433E49',
        },
        neutral: {
          25: '#fefefe',
          50: '#F3E8EB',
          100: '#f5f5f5',
          150: '#eeeeee',
          200: '#DBC1AD',
          300: '#d4d4d4',
          400: '#928490',
          500: '#928490',
          600: '#433E49',
          700: '#433E49',
          800: '#433E49',
          900: '#433E49',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'tight': '1.25',
      },
    },
  },
  plugins: [],
};
export default config;
