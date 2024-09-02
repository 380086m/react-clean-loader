import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import { dts } from "rollup-plugin-dts";

export default [
  {
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
    plugins: [
      typescript({
        tsconfig: "tsconfig.json",
        useTsconfigDeclarationDir: true,
      }),
      terser(),
      postcss({
        extract: "styles/bundle.css",
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "esm",
    },
    plugins: [
      dts({
        respectExternals: true,
      }),
    ],
    external: ["react", "react-dom"],
  },
];
