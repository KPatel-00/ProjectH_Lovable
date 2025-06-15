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
				'sans': ['Inter', 'Helvetica Neue', 'system-ui', '-apple-system', 'sans-serif'],
				'editorial': ['Inter', 'Helvetica Neue', 'system-ui', '-apple-system', 'sans-serif'],
			},
			/* Editorial + Minimalist Color Theme */
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#FAFAFA',
				foreground: '#1A1A1A',
				primary: {
					DEFAULT: '#1A1A1A',
					foreground: '#FAFAFA',
				},
				secondary: {
					DEFAULT: '#D9CBA3',
					foreground: '#1A1A1A',
				},
				accent: {
					DEFAULT: '#F4F4F4',
					foreground: '#1A1A1A',
				},
				muted: {
					DEFAULT: '#F7F5F1',
					foreground: '#737373',
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#1A1A1A',
				},
				// Additional refined colors
				neutral: {
					50: '#FAFAFA',
					100: '#F4F4F4',
					200: '#EAEAEA',
					300: '#DADADA',
					400: '#CFC6B8',
					500: '#D9CBA3',
					600: '#B8A682',
					700: '#9B8B6B',
					800: '#7D6F56',
					900: '#625546'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'refined': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
				'refined-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
				'refined-xl': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
				'refined-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.08)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'gentle-float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-2px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'gentle-float': 'gentle-float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
