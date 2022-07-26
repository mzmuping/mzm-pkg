export * from "./color";
export * from "./tools";
import pkg from "package.json";
console.log(pkg);

export class Anmal {
  name: any;
  constructor(name) {
    this.name = name;
  }
}
