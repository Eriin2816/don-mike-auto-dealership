/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          offwhite: '#F5F3EE',    // Warm off-white backgrounds
          warmgray: '#E5E2D8',    // Warm borders & dividers
          graphite: '#6B6D76',    // Body text / muted
          slate: '#141414',       // Dark card surfaces
          navy: '#1A1A2E',        // Deep dark accent
          electric: '#C1001F',    // Mazda Soul Red Crystal (primary CTA)
          glow: '#E8182E',        // Lighter red for glows
          dark: '#0D0D0D',        // Near-black backgrounds
          carbon: '#1E1E1E',      // Dark section backgrounds
          silver: '#B8B8B8',      // Brushed silver accent
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        mono: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.03em',
        display: '-0.04em',
        widest: '0.18em',
      },
      lineHeight: {
        body: '1.75',
        relaxed: '1.7',
      },
      boxShadow: {
        card: '0 1px 3px rgba(13,0,0,0.06), 0 4px 16px rgba(13,0,0,0.08)',
        'card-hover': '0 4px 12px rgba(193,0,31,0.1), 0 16px 40px rgba(13,0,0,0.16)',
        electric: '0 4px 24px rgba(193,0,31,0.35)',
        'electric-lg': '0 8px 40px rgba(193,0,31,0.45)',
        glow: '0 0 40px rgba(232,24,46,0.2)',
        'red-sm': '0 2px 8px rgba(193,0,31,0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
