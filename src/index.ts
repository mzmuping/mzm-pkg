export * from "./color";
export * from "./tools";
import pkg from "./../package.json";
console.log(pkg);
export class Anmal {
  name: any;
  constructor(name: any) {
    this.name = name;
  }
}

export const baaa = (...agr: any[]) => {
  console.log(11, agr);
};
export const pm = () => {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole(1);
    });
  });
};
export class A {
  name: any;
  constructor(name: any) {
    this.name = name;
  }
}
export class B extends A {
  constructor(name: any) {
    super(name);
  }
}
