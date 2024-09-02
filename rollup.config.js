// rollup.config.js
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import css from "rollup-plugin-import-css";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [typescript(), terser(), css()],
  external: ["react"],
};
