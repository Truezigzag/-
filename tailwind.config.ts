import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#08070E',
        haze: '#141322',
        ember: '#FF6A6A',
        violet: '#8A7BFF',
        mist: '#A8A7C9'
      },
      boxShadow: {
        glow: '0 0 40px rgba(138,123,255,0.25)',
        ember: '0 0 30px rgba(255,106,106,0.3)'
      },
      backgroundImage: {
        noise: 'radial-gradient(circle at 20% 20%, rgba(138,123,255,0.15), transparent 35%), radial-gradient(circle at 80% 0%, rgba(255,106,106,0.12), transparent 40%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.08), transparent 50%)'
      }
    }
  },
  plugins: []
};

export default config;
