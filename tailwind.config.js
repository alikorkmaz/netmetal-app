import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      screens: {
        'max-sm': { 'max': '640px' },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
