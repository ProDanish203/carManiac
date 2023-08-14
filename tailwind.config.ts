import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: "#070808",
        bg: "#ecefee",
        primary: "#4d4555",
        secondary: "#dadce2",
        accent: "#6d7182",
      },
      backgroundImage: {
        'pattern': "url('/detailsBg.jpg')",
      }
    },
  },
  plugins: [],
}
export default config
