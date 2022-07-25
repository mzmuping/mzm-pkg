/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
const isColor = function (value) {
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
};

var color = /*#__PURE__*/Object.freeze({
__proto__: null,
isColor: isColor
});

const deleteEmpty = (object) => {
    let empty = [undefined, null, NaN, ""];
    Object.keys(object).forEach((key) => {
        if (empty.includes(object[key])) {
            delete object[key];
        }
    });
    return object;
};

var tools = /*#__PURE__*/Object.freeze({
__proto__: null,
deleteEmpty: deleteEmpty
});

export { color as Color, tools as Tools };
