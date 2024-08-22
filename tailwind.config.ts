import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cybergreen: {
          100: '#C2FBE1',
          200: '#01c38b',
          300: '#1F5B65'
        },
        cyberblue: {
          100: '#132D46',
          200: '#162636',
          300:'#191E29'
        },
        cyberblack: '#181C18',
        cyberwhite: '#DEDCD0',
        cybergray: '#2B2A25',
        cyberorange: '#F5471D'
      },
      fontFamily: {
        w95f4: ['W95FA', 'sans-serif'],
        inconsolata: ['Inconsolata', 'system-ui'],
        dosis: ['Dosis', 'sans-serif'],
        sf_pixelate: ['SF Pixelate', 'sans-serif'],
        sf_pixelate_shaded: ['SF Pixelate Shaded', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  darkMode: 'class'
};
export default config;
