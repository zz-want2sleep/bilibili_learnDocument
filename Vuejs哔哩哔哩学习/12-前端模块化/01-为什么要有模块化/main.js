var mm = (function(){
  var m = {};
  m.name = '小明';
  m.getAge = function(n,m){
    return n + m;
  };
  return m;
})();
// 使用匿名函数的方式，这样可以避免全局变量相同导致的冲突，但是不便于重复使用（复用性不强）。
//所以可以在匿名函数内部定义一个对象，然后返回给一个全局变量。

//当然也可以不用自定义模块，可以使用通用的命名规范Commonjs、AMD、CMD以及ES6的modules的语法。
//使用CommonJS需要特定的开发环境。
//模块化，有两大核心， ’导入‘ 和 ’导出‘
// module.exports = {} 导出
// var { xx , xxx}解构写法 = require('相对/绝对地址')