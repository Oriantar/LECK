import dts from "rollup-plugin-dts";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" with { type: "json" };
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      PeerDepsExternalPlugin(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss({
        extract: "index.css",
        minimize: true,
        plugins: [tailwindcss(), autoprefixer()],
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: {
      file: packageJson.types,
    },
    plugins: [dts()],
    external: [/\.css$/],
  },
];
