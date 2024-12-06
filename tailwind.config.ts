import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1430px',
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi-regular)'],
        instrument: ["'Instrument Serif', system-ui"],
      },
      colors: {
        primary: '#0ce5d8',
        secondary: '#000',
        backgroundBody: '#fff',
        colorText: '#666666',
        dark: {
          DEFAULT: '#151515',
          100: '#ffffffb3',
          200: '#212220',
          300: '#191A17',
          gradient: '#191917',
        },
      },
      borderColor: {
        DEFAULT: '#e5e5e5',
        dark: '#2c2c2c',
      },
      backgroundImage: {
        'faq-gradient-bg': "url('/images/faq-gradient-bg.svg')",
        'faqV3-gradient-bg': "url('/images/faqV3-gradient-bg.svg')",
        'cta-gradient-bg': "url('/images/cta-gradient-bg.svg')",
        'marquee-gradient-bg': "url('/images/marquee-gradient-bg.png')",
        'homeV2-gradient-bg': "url('/images/homeV2-gradient-bg.svg')",
        'next-project-bg': "url('/images/project-details/next-project-bg.png')",
        'ai-gradient-bg': "url('/images/ai-transition.png')",
        'career-position-gradient-bg': "url('/images/career-img/career-position-bg.png')",
        'portfolio-hover-img': "url('/images/portfolio/portfolio-3.png')",
        'home-ai-hero': "url('/images/home-ai/hero-ai.png')",
        // --------ai-card-custom-gradient
        'custom-gradient': 'linear-gradient(0deg, #F1F1F1 0%, #F1F1F1 100%)',
      },
      transitionTimingFunction: {
        'faq-body-transition': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      boxShadow: {
        nav: '0px 0px 30px rgba(0, 0, 0, 0.05)',
        box: ' 0px 5px 50px 0px rgba(0, 0, 0, 0.07)',
      },
    },
  },
  safelist: [
    {
      pattern: /scale-/,
    },
  ],
  plugins: [],
} satisfies Config
