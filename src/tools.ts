/** 删除对象中值为: null, undefined, NaN, ''的属性 */
interface ObjectProps {
  [key: string]: any;
}
export const deleteEmpty = (object: ObjectProps) => {
  let empty = [undefined, null, NaN, ""];
  Object.keys(object).forEach((key) => {
    if (empty.includes(object[key])) {
      delete object[key];
    }
  });
  return object;
};
