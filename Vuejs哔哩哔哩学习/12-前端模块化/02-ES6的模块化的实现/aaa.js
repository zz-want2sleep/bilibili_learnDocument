var name = "小明",
  age = 18,
  flag = true;
function num(num1, num2){
  return num1 + num2;
}
if (flag) {
  console.log(num(20,30));
}
// 1.导出方式一
export {
  flag, num
}

// 2.导出方式二:
export let num1 = 1000,
  height = 1.88;

// 3.导出方式三,导出函数或类：
export function sum(num1, num2){
  return num1 + num2;
}

export function Person(){
  function run(){
    console.log('在奔跑');
  }
}

// 4.导出方式四 export default可以自定义导出的对象的名字。同一个模块中只能有一个export default
let address;
export default address = '长沙市';