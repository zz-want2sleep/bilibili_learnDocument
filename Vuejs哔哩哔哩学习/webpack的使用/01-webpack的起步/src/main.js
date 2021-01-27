// CommonJS的导入
const {add1, mul} = require('./js/mathUtils.js');

console.log(add1(20, 30));
console.log(mul(10, 20));
// 浏览器本身不支持CommonJs规范，使用webpack进行打包使得生成的包中不存在CommonJS规范的代码（转化为了原生的js代码），且webpack会自动处理各种模块之间的依赖。
// es6的导入
import {name, age, height} from './js/info.js'

console.log(name);
console.log(age);
console.log(height);