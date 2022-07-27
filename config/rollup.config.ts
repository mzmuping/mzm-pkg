const path = require("path");
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
const { babel } = require("@rollup/plugin-babel");

import { DEFAULT_EXTENSIONS } from "@babel/core";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import cleaner from "rollup-plugin-cleaner";
import { builtinModules } from "module";
const output = path.resolve(__dirname, "./../lib");
const pkg = require("./../package.json");
const external = Object.keys(pkg.dependencies || {}).concat(builtinModules);
const babelOptions = {
  presets: ["@babel/preset-env"],
  plugins: ["@babel/plugin-transform-runtime"],

  // 编译库使用
  babelHelpers: "runtime",
  // 只转换源代码，不转换外部依赖
  exclude: "node_modules/**",
  // babel 默认不支持 ts 需要手动添加
  extensions: [...DEFAULT_EXTENSIONS, ".ts"],
};
const config = [
  {
    input: path.resolve(__dirname, "./../src/index.ts"),
    output: [
      {
        file: path.join(output, "index.esm.js"),
        // amd/cjs/esm/iife/umd/system
        format: "esm", // 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
        name: pkg.name,
        exports: "auto",
        indent: false,
      },
      {
        file: path.join(output, "index.cjs"),
        format: "cjs", // CommonJS，适用于 Node 和 Browserify/Webpack
        name: pkg.name,
        exports: "auto",
        plugins: [terser()], //单个压缩
      },
      {
        file: path.join(output, "index.amd.js"),
        format: "amd", // 异步模块定义，用于像RequireJS这样的模块加载器
        name: pkg.name,
        exports: "auto",
      },
      {
        file: path.join(output, "index.umd.js"),
        format: "umd", //  通用模块定义，以amd，cjs 和 iife 为一体
        name: "MyBundle", //全局变量名，代表你的 iife/umd 包
        exports: "auto",
      },
      {
        file: path.join(output, "index.iife.js"),
        format: "iife", // 一个自动执行的功能，适合作为<script>标签
        name: "MyBundle", //全局变量名，代表你的 iife/umd 包
        exports: "auto",
      },
    ],
    plugins: [
      json(), //
      typescript(),
      resolve({
        // 将自定义选项传递给解析插件
        customResolveOptions: {
          moduleDirectory: "node_modules",
        },
      }),
      commonjs(), //
      babel(babelOptions),
      cleaner({
        targets: ["./lib/"],
      }),
    ],
    external, //指出应将哪些模块视为外部模块
  },
  //自动帮你生成类型声明文件 *.d.ts
  {
    input: path.resolve(__dirname, "./../src/index.ts"),
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
export default config;
