const path = require("path");
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
const output = path.resolve(__dirname, "./../lib");
export default {
  input: path.resolve(__dirname, "./../src/main.ts"),
  output: [
    {
      file: path.join(output, "index.esm.js"),
      // amd/cjs/esm/iife/umd/system
      format: "esm", // 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
      // name: pkg.name,
      exports: "auto",
    },
    {
      file: path.join(output, "index.cjs"),
      format: "cjs", // CommonJS，适用于 Node 和 Browserify/Webpack
      // name: pkg.name,
      exports: "auto",
    },
    {
      file: path.join(output, "index.amd.js"),
      format: "amd", // 异步模块定义，用于像RequireJS这样的模块加载器
      // name: pkg.name,
      exports: "auto",
    },
  ],
  plugins: [
    json(),
    typescript(),
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    commonjs(), //
    babel({
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
  ],
  external: ["lodash", "the-answer"], //指出应将哪些模块视为外部模块
};
