/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3F3B75",

          secondary: "#00C898",

          accent: "#c149ad",

          neutral: "#021431",

          "base-100": "#ffffff",

          info: "#93e6fb",

          success: "#80ced1",

          warning: "#efd8bd",

          error: "#e58b8b",
        },
      },
    ],
  },
  extend: {
    backgroundImage: (theme) => ({
      "custom-background":
        "url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/speckle-man.png')", // Replace with your image path
    }),
  },
  plugins: [require("daisyui")],
};
