define(['exports'], (function (exports) { 'use strict';

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

  exports.deleteEmpty = deleteEmpty;
  exports.isColor = isColor;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
