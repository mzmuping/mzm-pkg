import foo from "./foo";
import { version } from "../package.json";
console.log(version);
export default function () {
  console.log(foo);
  console.log("the answer is ");
}
