
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
        '2xl': '1200px'
      }
    },
    extend: {
      colors: {
        // Minimal monochrome palette
        background: '#fff',
        foreground: '#111',
        muted: "#f6f6f6",
        border: "#e4e4e4",
        accent: {
          DEFAULT: "#246BFD", // Chosen bright blue as accent
          foreground: "#fff",
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        lg: '6px',
        md: '4px',
        sm: '2px'
      },
      fontSize: {
        body: '1rem',
        h1: '2rem',
        h2: '1.4rem',
        h3: '1.1rem',
      },
    }
  },
  plugins: [],
} satisfies Config;
