const { deleteEmpty } = require("../dist/index.esm.js");
// import { deleteEmpty } from "../dist/index.esm.js";
let obj = {
  a: 1,
  b: undefined,
  c: null,
  d: NaN,
};
let obj2 = deleteEmpty(obj);
console.log("处理后=", obj2);
