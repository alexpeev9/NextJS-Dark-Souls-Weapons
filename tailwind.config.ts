/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primary: '#f2b524',
      secondary: '#414855',
      error: '#8b0000',
      black: '#000'
    },
    extend: {
      backgroundImage: {
        'artorias-logo': "url('/images/artorias-logo.svg')"
      },
      spacing: {
        height: 'calc(100vh - 7rem)', // h-28
        width: 'calc(100vw - 18rem)' // w-72
      }
    }
  },
  plugins: []
}
