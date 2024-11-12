import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          '8%':  '#449c47',
          '12%': '#449c47',
          '16%': '#449c47',
          '50':  '#ecf5ed',
          '100': '#c5e0c6',
          '200': '#a9d1aa',
          '300': '#82bd84',
          '400': '#69b06c',
          '500': '#449c47',
          '600': '#3e8e41',
          '700': '#306f32',
          '800': '#255627',
          '900': '#1d421e'
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
