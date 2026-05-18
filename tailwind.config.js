/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        primary: {
          DEFAULT: "#D4AF37", // Gold
          light: "#F5E0A3",
          dark: "#B8860B",
        primary: '#25D366', // WhatsApp Green
        secondary: '#128C7E', // Dark Green
        accent: '#075E54', // Deep Teal
        background: '#FFFFFF',
        foreground: '#111827',
        mint: '#DCF8C6', // WhatsApp Light Green
        cream: '#F0F2F5', // WhatsApp Chat Background
        glass: 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'whatsapp-gradient': 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        'soft-mesh': 'radial-gradient(at 0% 0%, rgba(37, 211, 102, 0.05) 0, transparent 50%), radial-gradient(at 50% 0%, rgba(18, 140, 126, 0.05) 0, transparent 50%), radial-gradient(at 100% 0%, rgba(37, 211, 102, 0.05) 0, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'typing': 'typing 1.5s steps(40, end)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.1 },
          '50%': { opacity: 0.3 },
        }
      }
    },
  },
  plugins: [],
}
