/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
declare const isColor: (value: string) => boolean;

/** 删除对象中值为: null, undefined, NaN, ''的属性 */
interface ObjectProps {
    [key: string]: any;
}
declare const deleteEmpty: (object: ObjectProps) => ObjectProps;

declare class Anmal {
    name: any;
    constructor(name: any);
}

export { Anmal, deleteEmpty, isColor };
