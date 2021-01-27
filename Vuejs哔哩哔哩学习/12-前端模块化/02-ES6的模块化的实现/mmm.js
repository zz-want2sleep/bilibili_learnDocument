// 1.导入{}中定义的变量
import {flag, num} from './aaa.js'
console.log('小明是天才');
if (flag) {
  console.log('小明是个天才');
}
num(12,13);
// 2.直接导入export定义的变量
import {num1, height} from './aaa.js';
console.log(num1, height);
// 3.导入export的function/class
import {Person, sum} from './aaa.js';

//统一全部导入，不建议{xx,xxx,xxx,}这种方式导入
// 建议使用*别名一个对象
import * as all from './aaa.js';