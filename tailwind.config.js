/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#000000',
          secondary: '#050505',
          card: '#0a0a0a',
          border: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#00ff41',
          light: '#39ff14',
          glow: 'rgba(0, 255, 65, 0.12)',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#888888',
          muted: '#555555',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        'screen-1700': '1700px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'grid': 'grid 20s linear infinite',
        'noise': 'noise 0.5s steps(2) infinite',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 65, 0.15)' },
          '100%': { boxShadow: '0 0 50px rgba(0, 255, 65, 0.4)' },
        },
        grid: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        noise: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(1px, -1px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

