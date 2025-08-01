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
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-30px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(30px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.6)'
					}
				},
				"bounce-gentle": {
					"0%, 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-5px)",
					}
				},
				"shake": {
					"0%, 100%": { transform: "translateX(0)" },
					"10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
					"20%, 40%, 60%, 80%": { transform: "translateX(2px)" }
				},
				"glow": {
					"0%, 100%": {
						boxShadow: "0 0 20px hsl(var(--primary) / 0.3)"
					},
					"50%": {
						boxShadow: "0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.4)"
					}
				},
				"particles": {
					"0%": {
						transform: "translateY(100vh) translateX(-50px) rotate(0deg)",
						opacity: "0"
					},
					"10%": {
						opacity: "1"
					},
					"90%": {
						opacity: "1"
					},
					"100%": {
						transform: "translateY(-100vh) translateX(50px) rotate(360deg)",
						opacity: "0"
					}
				},
				"gradient-shift": {
					"0%, 100%": {
						backgroundPosition: "0% 50%"
					},
					"50%": {
						backgroundPosition: "100% 50%"
					}
				},
				"text-shimmer": {
					"0%": {
						backgroundPosition: "-200% 0"
					},
					"100%": {
						backgroundPosition: "200% 0"
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.5s ease-out',
				'accordion-up': 'accordion-up 0.5s ease-out',
				'fade-in': 'fade-in 4s ease-out',
				'fade-in-up': 'fade-in-up 4s ease-out',
				'scale-in': 'scale-in 3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'slide-in-left': 'slide-in-left 4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'slide-in-right': 'slide-in-right 4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'float': 'float 25s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 20s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 20s ease-in-out infinite',
				'shake': 'shake 2s ease-in-out',
				'glow': 'glow 25s ease-in-out infinite',
				'particles': 'particles 15s linear infinite',
				'gradient-shift': 'gradient-shift 25s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 15s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
