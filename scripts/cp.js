const cp = require("cp");
const path = require("path");
let sourFile = path.resolve(__dirname, "./../package.json");
let targetFile = path.resolve(__dirname, "./../lib/package.json");
//复制文件
cp.sync(sourFile, targetFile);
cp.sync(
  path.resolve(__dirname, "./../lib/index.esm.js"),
  path.resolve(__dirname, "./../demo/index.esm.js")
);
