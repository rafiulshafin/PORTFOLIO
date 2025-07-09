/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futuristic: ["'Orbitron'", "sans-serif"],
      },
      colors: {
        primary: '#0ff',
        accent: '#a259ff',
        darkBg: '#181824',
        glass: 'rgba(24,24,36,0.7)',
      },
      boxShadow: {
        neon: '0 0 8px #0ff, 0 0 16px #a259ff',
        glass: '0 4px 32px 0 rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'futuristic-gradient': 'linear-gradient(135deg, #181824 0%, #232946 100%)',
      },
    },
  },
  plugins: [],
}

