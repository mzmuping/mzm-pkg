"use strict";

var foo = "hello world!";

import { version } from "../package.json";
console.log(version);
function main() {
  console.log(foo);
  console.log("the answer is ");
}

module.exports = main;
