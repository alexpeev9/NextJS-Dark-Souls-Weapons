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
      error: '#8b0000'
    },
    backgroundImage: {
      'artorias-logo': "url('/images/artorias-logo.svg')"
    }
  },
  plugins: []
}
