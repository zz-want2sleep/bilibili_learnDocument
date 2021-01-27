<template>
  <div id="app">
    <h2>---------------- App内容 直接使用$store.state.xxx调用状态信息 ----------------</h2>
    <h2>vue.js</h2>
    <counter/>
    {{$store.state.count}}
    <h2>---------------- App内容：使用$store.getters.xxx类似于computed计算属性调用修饰后的状态信息 ----------------</h2>
    <h2>count的平方{{$store.getters.powerCount}}</h2>
    <h2>大于二十的学生{{$store.getters.moreTwenty}}</h2>
    <h2>大于二十的学生的数量{{$store.getters.more20stuLength}}</h2>
    <h2>通过输入年龄而不是定死{{$store.getters.moreAgeStu(12)}}</h2>
    <!-- 因为类似计算属性，可以通过返回一个匿名函数进行传值 -->
    <!-- 为啥不用计算属性，因为如果另外一个组件也要使用这个被修饰后的状态的话就需要再写一个计算属性，就很繁琐了 -->
    
  </div>
</template>

<script>
import Counter from './components/Counter'
export default {
  name: 'App',
  components: {
      Counter
  }
}
</script>

<style>

</style>
