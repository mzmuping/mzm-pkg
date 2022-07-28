(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime-corejs3/helpers/inherits'), require('@babel/runtime-corejs3/helpers/possibleConstructorReturn'), require('@babel/runtime-corejs3/helpers/getPrototypeOf'), require('@babel/runtime-corejs3/helpers/createClass'), require('@babel/runtime-corejs3/helpers/classCallCheck'), require('@babel/runtime-corejs3/helpers/defineProperty'), require('@babel/runtime-corejs3/core-js-stable/promise'), require('@babel/runtime-corejs3/core-js-stable/set-timeout'), require('@babel/runtime-corejs3/core-js-stable/reflect/construct'), require('@babel/runtime-corejs3/core-js-stable/instance/for-each'), require('@babel/runtime-corejs3/core-js-stable/object/keys'), require('@babel/runtime-corejs3/core-js-stable/instance/includes')) :
  typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime-corejs3/helpers/inherits', '@babel/runtime-corejs3/helpers/possibleConstructorReturn', '@babel/runtime-corejs3/helpers/getPrototypeOf', '@babel/runtime-corejs3/helpers/createClass', '@babel/runtime-corejs3/helpers/classCallCheck', '@babel/runtime-corejs3/helpers/defineProperty', '@babel/runtime-corejs3/core-js-stable/promise', '@babel/runtime-corejs3/core-js-stable/set-timeout', '@babel/runtime-corejs3/core-js-stable/reflect/construct', '@babel/runtime-corejs3/core-js-stable/instance/for-each', '@babel/runtime-corejs3/core-js-stable/object/keys', '@babel/runtime-corejs3/core-js-stable/instance/includes'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RollupTsTemplate = {}, global._inherits, global._possibleConstructorReturn, global._getPrototypeOf, global._createClass, global._classCallCheck, global._defineProperty, global._Promise, global._setTimeout, global._Reflect$construct, global._forEachInstanceProperty, global._Object$keys, global._includesInstanceProperty));
})(this, (function (exports, _inherits, _possibleConstructorReturn, _getPrototypeOf, _createClass, _classCallCheck, _defineProperty, _Promise, _setTimeout, _Reflect$construct, _forEachInstanceProperty, _Object$keys, _includesInstanceProperty) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
  var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
  var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
  var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
  var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
  var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
  var _Promise__default = /*#__PURE__*/_interopDefaultLegacy(_Promise);
  var _setTimeout__default = /*#__PURE__*/_interopDefaultLegacy(_setTimeout);
  var _Reflect$construct__default = /*#__PURE__*/_interopDefaultLegacy(_Reflect$construct);
  var _forEachInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_forEachInstanceProperty);
  var _Object$keys__default = /*#__PURE__*/_interopDefaultLegacy(_Object$keys);
  var _includesInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_includesInstanceProperty);

  var isColor = function isColor(value) {
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
  };

  var deleteEmpty = function deleteEmpty(object) {
    var _context;

    var empty = [undefined, null, NaN, ""];

    _forEachInstanceProperty__default["default"](_context = _Object$keys__default["default"](object)).call(_context, function (key) {
      if (_includesInstanceProperty__default["default"](empty).call(empty, object[key])) {
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

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = _Reflect$construct__default["default"](Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct__default["default"]) return false; if (_Reflect$construct__default["default"].sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct__default["default"](Boolean, [], function () {})); return true; } catch (e) { return false; } }
  console.log(pkg);
  var Anmal = /*#__PURE__*/_createClass__default["default"](function Anmal(name) {
    _classCallCheck__default["default"](this, Anmal);

    _defineProperty__default["default"](this, "name", void 0);

    this.name = name;
  });
  var baaa = function baaa() {
    for (var _len = arguments.length, agr = new Array(_len), _key = 0; _key < _len; _key++) {
      agr[_key] = arguments[_key];
    }

    console.log(11, agr);
  };
  var pm = function pm() {
    return new _Promise__default["default"](function (resole, reject) {
      _setTimeout__default["default"](function () {
        resole(1);
      });
    });
  };
  var A = /*#__PURE__*/_createClass__default["default"](function A(name) {
    _classCallCheck__default["default"](this, A);

    _defineProperty__default["default"](this, "name", void 0);

    this.name = name;
  });
  var B = /*#__PURE__*/function (_A) {
    _inherits__default["default"](B, _A);

    var _super = _createSuper(B);

    function B(name) {
      _classCallCheck__default["default"](this, B);

      return _super.call(this, name);
    }

    return _createClass__default["default"](B);
  }(A);

  exports.A = A;
  exports.Anmal = Anmal;
  exports.B = B;
  exports.baaa = baaa;
  exports.deleteEmpty = deleteEmpty;
  exports.isColor = isColor;
  exports.pm = pm;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
