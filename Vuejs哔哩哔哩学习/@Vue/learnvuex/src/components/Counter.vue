<template>
    <div id="counter">
        {{$store.state.count}}
        <h2>---------------- App内容：使用$store.commit('xxx')调用mutations的xxx方法改变状态信息 ----------------</h2>
        <button @click="addition">+</button>
        <button @click="subtraction">-</button>
        <button @click="addCount(5)">+5</button>
        <button @click="addCount(10)">+10</button>
        <button @click="addStu">添加一个学生</button>
        <h2>---------------- App内容：是否是响应式 ----------------</h2>
        {{$store.state.info}}
        <button @click="addProp">添加一个属性</button>
        <button @click="deleteProp">删除一个属性</button>

        <button @click="updateName">控制台查看</button>
    </div>
</template>

<script>
import * as cst from '../store/mutation-types'
export default {
    name: 'counter',
    data () {
        return {}
    },
    //如果是异步操作（网络请求）必须先dispatch一下actions中的方法，如果需要回调（成功或失败的消息）可以使用Promise
    methods: {
        addition(){
            // this.$store.commit(cst.INCREMENT)
            this.$store
                .dispatch('aUpdateCount', '传进一个信息').then((msg) => {
                    console.log('count增添成功')
                    console.log(msg)
                })
        },
        subtraction(){
            this.$store.commit(cst.REDUCE)
        },
        addCount(num){
            // 普通的提交风格，直接提交一个普通自定义参数
            // this.$store.commit('addCount', num)
            // 特殊的提交风格，提交一个对象，在mutations的方法中使用payload作为形参比较合适
            this.$store.commit({
                type: cst.ADDCOUNT,
                num
            })
        },
        addStu() {
            let stu = {id: 5, name: 'hyh', age: '24'}
            this.$store.commit(cst.ADDSTU, stu)
        },
        addProp() {
            //修改state必须经过mutations
            this.$store.commit(cst.ADDPROP, 'IDontNo')
        },
        deleteProp() {
            //修改state必须经过mutations
            this.$store.commit(cst.DELETEPROP)
        },
        updateName() {
            console.log(this.$store.state.a.name);
            this.$store.dispatch('callBackfcn', this.$store.state.a.name).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style>

</style>