### 前端工具库

### api分类
- color.ts 判断是否是十六进制颜色值 
- tools.ts 删除对象中值为: null, undefined, NaN, ''的属性 

### 本地开发
```js
yarn dev
```
### 测试
```js
yarn test
```
### 打包
```js
yarn build
```

### 发布
```js
yarn publish
```

### 使用 安装
```js
yarn add mzm-sdk
```
### 引入
```js
import {deleteEmpty,isColor} from 'mzm-sdk'

let obj = {
        a: undefined,
        b: 1,
        c: null,
        d: "",
        e: NaN,
      };
console.log(Tools.deleteEmpty(obj));//{b:1}
```
