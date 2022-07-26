'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
const isColor = function (value) {
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
};

const deleteEmpty = (object) => {
    let empty = [undefined, null, NaN, ""];
    Object.keys(object).forEach((key) => {
        if (empty.includes(object[key])) {
            delete object[key];
        }
    });
    return object;
};

var name = "mzm-sdk";
var version = "1.7.1";
var description = "常用js方法";
var main = "lib/index.cjs.js";
var module$1 = "lib/index.esm.js";
var browser = "lib/index.js";
var scripts = {
	dev: "rollup -c config/rollup.config.dev.ts --watch",
	build: "npm run clean & rollup -c config/rollup.config.ts & npm run copy",
	clean: "rm -rf ./lib",
	copy: "node scripts/cp.js",
	yp: "node scripts/publish.js"
};
var author = "";
var license = "ISC";
var repository = {
	type: "git",
	url: "https://github.com/mzmuping/mzm-pkg.git"
};
var devDependencies = {
	"@babel/cli": "^7.18.9",
	"@babel/core": "^7.18.9",
	"@babel/preset-env": "^7.18.9",
	commander: "^9.4.0",
	rollup: "^2.77.0",
	"rollup-plugin-babel": "^4.4.0",
	"rollup-plugin-commonjs": "^10.1.0",
	"rollup-plugin-dts": "^4.2.2",
	"rollup-plugin-json": "^4.0.0",
	"rollup-plugin-node-resolve": "^5.2.0",
	"rollup-plugin-typescript2": "^0.32.1",
	shelljs: "^0.8.5",
	tslib: "^2.4.0",
	typescript: "^4.7.4",
	cp: "^0.2.0"
};
var dependencies = {
};
var types = "lib/index.d.ts";
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	module: module$1,
	browser: browser,
	scripts: scripts,
	author: author,
	license: license,
	repository: repository,
	devDependencies: devDependencies,
	dependencies: dependencies,
	types: types
};

console.log(pkg);

exports.deleteEmpty = deleteEmpty;
exports.isColor = isColor;
