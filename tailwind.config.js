/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        round: '0 0 20px #fff',
      },
    },
  },
  plugins: [],
};
