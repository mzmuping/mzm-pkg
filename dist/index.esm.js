import _inherits from '@babel/runtime-corejs3/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime-corejs3/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime-corejs3/helpers/getPrototypeOf';
import _createClass from '@babel/runtime-corejs3/helpers/createClass';
import _classCallCheck from '@babel/runtime-corejs3/helpers/classCallCheck';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _Promise from '@babel/runtime-corejs3/core-js-stable/promise';
import _setTimeout from '@babel/runtime-corejs3/core-js-stable/set-timeout';
import _Reflect$construct from '@babel/runtime-corejs3/core-js-stable/reflect/construct';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _includesInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/includes';

var isColor = function isColor(value) {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
};

var deleteEmpty = function deleteEmpty(object) {
  var _context;

  var empty = [undefined, null, NaN, ""];

  _forEachInstanceProperty(_context = _Object$keys(object)).call(_context, function (key) {
    if (_includesInstanceProperty(empty).call(empty, object[key])) {
      delete object[key];
    }
  });

  return object;
};

var name = "mzm-sdk";
var version = "1.0.0";
var main = "dist/index.ejs";
var module = "dist/index.esm.js";
var umd = "dist/index.umd.js";
var license = "MIT";
var types = "./dist/types/index.d.ts";
var scripts = {
	"clean:dist": "rimraf dist",
	"build:types": "npm run clean:dist && tsc -b ./tsconfig.types.json",
	build: "npm run build:types && rollup -c",
	dev: "rollup -c -w",
	test: "node ./test/index.js"
};
var devDependencies = {
	"@babel/core": "^7.18.9",
	"@babel/plugin-transform-runtime": "^7.18.9",
	"@babel/preset-env": "^7.18.9",
	"@rollup/plugin-babel": "^5.3.1",
	"@rollup/plugin-commonjs": "^22.0.1",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-node-resolve": "^13.3.0",
	rimraf: "^3.0.2",
	rollup: "^2.77.2",
	"rollup-plugin-terser": "^7.0.2",
	"rollup-plugin-typescript2": "^0.32.1",
	typescript: "^4.7.4"
};
var pkg = {
	name: name,
	version: version,
	main: main,
	module: module,
	umd: umd,
	license: license,
	types: types,
	scripts: scripts,
	devDependencies: devDependencies
};

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
console.log(pkg);
var Anmal = /*#__PURE__*/_createClass(function Anmal(name) {
  _classCallCheck(this, Anmal);

  _defineProperty(this, "name", void 0);

  this.name = name;
});
var baaa = function baaa() {
  for (var _len = arguments.length, agr = new Array(_len), _key = 0; _key < _len; _key++) {
    agr[_key] = arguments[_key];
  }

  console.log(11, agr);
};
var pm = function pm() {
  return new _Promise(function (resole, reject) {
    _setTimeout(function () {
      resole(1);
    });
  });
};
var A = /*#__PURE__*/_createClass(function A(name) {
  _classCallCheck(this, A);

  _defineProperty(this, "name", void 0);

  this.name = name;
});
var B = /*#__PURE__*/function (_A) {
  _inherits(B, _A);

  var _super = _createSuper(B);

  function B(name) {
    _classCallCheck(this, B);

    return _super.call(this, name);
  }

  return _createClass(B);
}(A);

export { A, Anmal, B, baaa, deleteEmpty, isColor, pm };
