const config = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.svelte"],
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
