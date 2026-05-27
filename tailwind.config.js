/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm-dark palette inspired by opencode — refined for portfolio
        background: '#0e0e0e',
        surface: '#151515',
        surface2: '#1c1c1c',
        surface3: '#242424',
        border: '#1f1f1f',
        'border-light': '#2a2a2a',
        text: '#e8e8e8',
        'text-muted': '#888888',
        'text-muted2': '#555555',
        accent: '#ffffff',
        'accent-hover': '#e0e0e0',
        // Semantic
        'green': '#30d158',
        'blue': '#5e9eff',
        'orange': '#ff9f0a',
        'purple': '#bf5af2',
      },
      fontFamily: {
        sans: [
          'Inter',
          'SF Pro Display',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.625rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.15' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgb(0 0 0 / 0.3)',
        'card': '0 2px 8px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
        'card-hover': '0 8px 24px 0 rgb(0 0 0 / 0.4), 0 2px 4px -1px rgb(0 0 0 / 0.3)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.02)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'scale-in-up': 'scaleInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-up-sm': 'slideUpSm 0.4s ease-out',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'subtitle-in': 'subtitleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleInUp: {
          '0%': { opacity: '0', transform: 'scale(0.92) translateY(16px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUpSm: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        subtitleIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
