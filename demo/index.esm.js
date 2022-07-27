function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var createClass = createCommonjsModule(function (module) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _createClass = unwrapExports(createClass);

var classCallCheck = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _classCallCheck = unwrapExports(classCallCheck);

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _defineProperty = unwrapExports(defineProperty);

/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
var isColor = function isColor(value) {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
};

var deleteEmpty = function deleteEmpty(object) {
  var empty = [undefined, null, NaN, ""];
  Object.keys(object).forEach(function (key) {
    if (empty.includes(object[key])) {
      delete object[key];
    }
  });
  return object;
};

var name = "mzm-sdk";
var version = "1.8.2";
var description = "常用js方法";
var main = "lib/index.cjs.js";
var module = "lib/index.esm.js";
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
	"@babel/plugin-external-helpers": "^7.18.6",
	"@babel/plugin-transform-runtime": "^7.18.9",
	"@babel/preset-env": "^7.18.9",
	"@babel/runtime": "^7.18.9",
	"@rollup/plugin-babel": "^5.3.1",
	"babel-plugin-external-helpers": "^6.22.0",
	"babel-preset-latest": "^6.24.1",
	commander: "^9.4.0",
	cp: "^0.2.0",
	rollup: "^2.77.0",
	"rollup-plugin-cleaner": "^1.0.0",
	"rollup-plugin-commonjs": "^10.1.0",
	"rollup-plugin-dts": "^4.2.2",
	"rollup-plugin-json": "^4.0.0",
	"rollup-plugin-node-resolve": "^5.2.0",
	"rollup-plugin-terser": "^7.0.2",
	"rollup-plugin-typescript2": "^0.32.1",
	shelljs: "^0.8.5",
	tslib: "^2.4.0",
	typescript: "^4.7.4"
};
var dependencies = {
};
var types = "lib/index.d.ts";
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	module: module,
	scripts: scripts,
	author: author,
	license: license,
	repository: repository,
	devDependencies: devDependencies,
	dependencies: dependencies,
	types: types
};

console.log(pkg);
var Anmal = /*#__PURE__*/_createClass(function Anmal(name) {
  _classCallCheck(this, Anmal);

  _defineProperty(this, "name", void 0);

  this.name = name;
});

export { Anmal, deleteEmpty, isColor };
