import { defineConfig } from "astro/config";

const site = "https://danny-burrows.github.io";
const base = process.env.NODE_ENV === "production" ? "/anony-mouse" : "/";

export default defineConfig({
  output: "static",
  site,
  base
});
