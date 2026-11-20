/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mc: {
          yellow: '#FFE01B',        // Signature Mailchimp Cavendish Yellow
          'yellow-hover': '#F5D700',
          dark: '#241C15',          // Signature Mailchimp Peppercorn / Espresso Black
          bg: '#F6F6F4',            // Mailchimp Warm Off-White / Alabaster
          card: '#FFFFFF',
          warm: '#FBEEDB',          // Mailchimp Peach / Oat Warm Highlight
          sand: '#EDEBE3',          // Neutral Divider Sand
          teal: '#007C89',          // Mailchimp Teal
          coral: '#E04838',         // Mailchimp Coral
          green: '#008444',         // Mailchimp Forest Green
          purple: '#A15D98',        // Mailchimp Plum Purple
          border: '#241C15',
          muted: '#59524C',
          subtle: 'rgba(36, 28, 21, 0.14)',
        },
        brand: {
          yellow: '#FFE01B',
          'yellow-hover': '#F5D700',
          dark: '#241C15',
          bg: '#F6F6F4',
          card: '#FFFFFF',
          muted: '#59524C',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'mc-card': '0 4px 20px rgba(36, 28, 21, 0.06)',
        'mc-hover': '0 8px 30px rgba(36, 28, 21, 0.12)',
        'mc-hard': '4px 4px 0px #241C15',
        'mc-hard-sm': '2px 2px 0px #241C15',
        'mc-hard-lg': '6px 6px 0px #241C15',
      },
      keyframes: {
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
        marquee: 'marquee 35s linear infinite',
        marqueeReverse: 'marqueeReverse 35s linear infinite',
      }
    },
  },
  plugins: [],
}
