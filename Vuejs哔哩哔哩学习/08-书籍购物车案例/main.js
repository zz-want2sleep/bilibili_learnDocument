const app = new Vue({
  el: '#app',
  data: {
    list: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price:  85.00,
        count:  1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price:  '50.00',
        count:  1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price:  '39.00',
        count:  1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price:  '120.00',
        count:  1
      },
    ]
  },
  methods: {
    // tofixed(price){
    //   return '?' + Number(price).toFixed(2);
    // }
    increment(index){
      this.list[index].count++;
    },
    decrement(index){
      // if (this.list[index].count > 1) {
      //   this.list[index]--;
      // }else{
      //   return;
      // }
      this.list[index].count--;
    },
    removeBtn(index){
      this.list.splice(index,1);
    }
  },
  computed: {
   totalPrice(){
    //  let totalPrice = 0;
    //  1.普通的for循环
  //    for (let index = 0; index < this.list.length; index++) {
  //     totalPrice += this.list[index].count * this.list[index].price;
  //    }
  // 2.for(let i of this.list)
  // for( let i in this.list){
  //   totalPrice += this.list[i].count * this.list[i].price;
  // }
  // // 3. for (let item of this.list){
  //   totalPrice += item.count * item.price;
  // }

     return this.list.reduce((pre,cur) => pre + cur.count * cur.price , 0);
     }
  },
  filters:{
    showPrice(price){
      return '¥' + Number(price).toFixed(2);
    }
  }
})


// 编程范式: 命令式编程/声明式编程/
// 编程范式： 面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
// filter/map/reduce
// filter中的回调函数有一个要求，必须返回一个boolean值
// true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false：当返回false时，函数内部会过滤这次的n
const nums = [10,20,111,222,444,40,50];
// 1.filter函数的使用
// 10,20,40,50
// let newNums = nums.filter(function(n){
//   return n < 100;
// })

// // 2. map函数的使用
// let new2Nums = newNums.map(function(n){
//   return n*2;
// });

// 3. reduce函数的使用
// 第一次： pre 0 cur 20
// 第二次： pre 20 cur 40
// 第三次： pre 60 cur 80
// 第四次： pre 140 cur 100
// total：240
// let total = new2Nums.reduce(function(pre,cur,curIdx,arr){
//   return pre + cur;
// },0);


// 1.需求：取出所有小于100的数字
// let newNums = [];
// for (let i of nums){
//   if(i<100){
//     newNums.push(i);
//   }
// }

// 2.需求：将所有小于100的数字进行转化：全部乘以2

// let new2Nums = [];
// for (let i of newNums){
//   new2Nums.push(i*2);
// }

// 将所有的需求通过高级函数链式的方式进行汇总

// nums.filter(function(n){
//   return n < 100;
// }).map(function(n){
//   return n * 2;
// }).reduce(function(pre,cur){
//   return pre + cur;
// },0);

nums.filter(n => n < 100).map(n => n * 2).reduce((pre,cur) => pre + cur,0);
// 箭头函数的执行体如果没有用大括号包裹可以不使用return，但是使用大括号就必须使用return