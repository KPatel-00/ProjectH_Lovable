import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
      },
      colors: {
        // Minimalist palette
        background: '#fff',
        foreground: '#18181b',
        muted: '#e4e4e7',
        accent: {
          DEFAULT: '#2563eb', // Bold blue accent for CTAs/links
        },
        border: '#e4e4e7',
      },
      borderRadius: {
        DEFAULT: '0.5rem'
      }
      // Remove shadow/gradient/complex color schemes
    }
  },
  plugins: []
} satisfies Config;
