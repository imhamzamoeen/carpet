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
        // Dark Neomorphic Color System
        background: {
          primary: '#0C0C0C',
          secondary: '#121212',
        },
        surface: {
          card: '#1A1A1A',
          glass: 'rgba(255, 255, 255, 0.08)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#C5C5C5',
          accent: '#FF9C90',
          label: '#AAAAAA',
        },
        accent: {
          yellow: '#FFCC48',
          coral: '#FF9C90',
          pink: '#FF788C',
          purple: 'rgba(200, 80, 255, 0.25)',
        },
        glow: {
          card: 'rgba(255, 120, 140, 0.35)',
          soft: 'rgba(255, 140, 120, 0.25)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        grotesk: ['var(--font-grotesk)', 'Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '110%', letterSpacing: '-1%', fontWeight: '700' }],
        'h1': ['3.5rem', { lineHeight: '110%', letterSpacing: '-1%', fontWeight: '700' }],
        'h2': ['2.5rem', { lineHeight: '120%', letterSpacing: '-0.5%', fontWeight: '700' }],
        'h3': ['2rem', { lineHeight: '130%', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '150%' }],
        'label': ['14px', { lineHeight: '140%' }],
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
        'pill': '9999px',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(255, 120, 140, 0.35)',
        'glow-soft': '0 0 60px rgba(255, 140, 120, 0.25)',
        'glow-accent': '0 0 50px rgba(255, 204, 72, 0.4)',
        'neomorphic': '20px 20px 60px rgba(0, 0, 0, 0.5), -20px -20px 60px rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'gradient-radial-coral': 'radial-gradient(circle, rgba(255,140,120,0.25), transparent)',
        'gradient-radial-purple': 'radial-gradient(circle, rgba(200,80,255,0.25), transparent)',
        'gradient-mesh': 'radial-gradient(at 20% 30%, rgba(255,140,120,0.25) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(200,80,255,0.25) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 40px rgba(255, 120, 140, 0.35)' },
          '50%': { boxShadow: '0 0 60px rgba(255, 120, 140, 0.55)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
      },
    },
  },
  plugins: [],
};
export default config;
