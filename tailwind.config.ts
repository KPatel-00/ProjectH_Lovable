
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
				'sans': ['Helvetica Neue', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
				'editorial': ['Helvetica Neue', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			fontSize: {
				'editorial-xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
				'editorial-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.005em' }],
				'editorial-base': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
				'editorial-lg': ['1.125rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
				'editorial-xl': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
				'editorial-2xl': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'editorial-3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'editorial-4xl': ['2.25rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
				'editorial-5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
				'editorial-6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
				'editorial-7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
			},
			fontWeight: {
				'editorial-thin': '100',
				'editorial-light': '300',
				'editorial-normal': '400',
				'editorial-medium': '500',
				'editorial-semibold': '600',
				'editorial-bold': '700',
				'editorial-extrabold': '800',
				'editorial-black': '900',
			},
			letterSpacing: {
				'editorial-tight': '-0.02em',
				'editorial-normal': '-0.01em',
				'editorial-wide': '0.02em',
			},
			lineHeight: {
				'editorial-tight': '1.1',
				'editorial-normal': '1.2',
				'editorial-relaxed': '1.4',
				'editorial-loose': '1.6',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
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
