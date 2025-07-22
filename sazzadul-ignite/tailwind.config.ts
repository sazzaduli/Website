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
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.6)' }
				},
				'fadeInUp': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slideInRight': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(-50px, -50px)' }
				},
				'drift': {
					'0%': { transform: 'translateX(0px) translateY(0px)' },
					'33%': { transform: 'translateX(30px) translateY(-30px)' },
					'66%': { transform: 'translateX(-20px) translateY(20px)' },
					'100%': { transform: 'translateX(0px) translateY(0px)' }
				},
				'particle-float': {
					'0%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(180deg)' },
					'100%': { transform: 'translateY(0px) rotate(360deg)' }
				},
				'tech-grid': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(100px, 100px)' }
				},
				'data-flow-horizontal': {
					'0%': { transform: 'translateX(-100px)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateX(100vw)', opacity: '0' }
				},
				'data-flow-vertical': {
					'0%': { transform: 'translateY(-100px)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'tech-pulse': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.2)', opacity: '0.7' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'tech-float': {
					'0%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.3' },
					'33%': { transform: 'translateY(-30px) translateX(20px)', opacity: '1' },
					'66%': { transform: 'translateY(10px) translateX(-15px)', opacity: '0.5' },
					'100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.3' }
				},
				'scan-horizontal': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' }
				},
				'scan-vertical': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(100%)', opacity: '0' }
				},
				'binary-rain': {
					'0%': { transform: 'translateY(-100px)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'hologram': {
					'0%': { opacity: '0.05' },
					'50%': { opacity: '0.1' },
					'100%': { opacity: '0.05' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'fadeInUp': 'fadeInUp 0.6s ease-out',
				'slideInRight': 'slideInRight 0.6s ease-out',
				'slide': 'slide 20s linear infinite',
				'drift': 'drift 8s ease-in-out infinite',
				'particle-float': 'particle-float 6s ease-in-out infinite',
				'tech-grid': 'tech-grid 20s linear infinite',
				'data-flow-horizontal': 'data-flow-horizontal 6s linear infinite',
				'data-flow-vertical': 'data-flow-vertical 8s linear infinite',
				'tech-pulse': 'tech-pulse 3s ease-in-out infinite',
				'tech-float': 'tech-float 8s ease-in-out infinite',
				'scan-horizontal': 'scan-horizontal 8s ease-in-out infinite',
				'scan-vertical': 'scan-vertical 6s ease-in-out infinite',
				'binary-rain': 'binary-rain 12s linear infinite',
				'hologram': 'hologram 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
