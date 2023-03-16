/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  plugins: [require("tailwindcss-text-fill-stroke")],
};

module.exports = config;
