/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl-up": "0 -35px 60px -15px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderWidth: {
        0.5: "0.5px", // Add border-0.5 for 0.5px border width
      },
    },
  },
  plugins: [],
};
