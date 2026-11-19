/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFE500',
          'yellow-hover': '#F5DC00',
          'yellow-light': '#FFF580',
          'yellow-glow': 'rgba(255, 229, 0, 0.15)',
          dark: '#0A0B0E',
          surface: '#12141A',
          card: '#181B22',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(255, 229, 0, 0.25)',
          muted: '#8E95A5',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'yellow-glow': '0 0 25px -3px rgba(255, 229, 0, 0.25)',
        'yellow-glow-lg': '0 0 45px -5px rgba(255, 229, 0, 0.35)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        marquee: 'marquee 35s linear infinite',
        marqueeReverse: 'marqueeReverse 35s linear infinite',
      }
    },
  },
  plugins: [],
}
