// 1. CommonJS的导入
const {add1, mul} = require('./js/mathUtils.js');

console.log(add1(20, 30));
console.log(mul(10, 20));
// 2. 浏览器本身不支持CommonJs规范，使用webpack进行打包使得生成的包中不存在CommonJS规范的代码（转化为了原生的js代码），且webpack会自动处理各种模块之间的依赖。
// es6的导入
import {name, age, height} from './js/info.js'
// 3. 刻意的去依赖css
require('./css/normal.css');

console.log(name);
console.log(age);
console.log(height);
//4. 依赖less文件
require('./css/special.less');
//目前每更改一次文件就需要重新去打一次包。后期使用本地服务器就可以使用热加载功能
document.writeln('<h2>今天是个不错的天气</h2>');