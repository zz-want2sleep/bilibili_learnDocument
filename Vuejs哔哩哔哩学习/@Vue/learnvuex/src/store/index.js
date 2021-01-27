import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
Vue.use(Vuex)
const state = {
    count: 1000,
    stu: [
        {id: 1, name: 'zz', age: 20},
        {id: 2, name: 'hyh', age: 28},
        {id: 3, name: 'ww', age: 14},
        {id: 4, name: 'kk', age: 18},
    ],
    name: 'wanwan',
    info: {name: 'ww', age: 19, sex: 'woman'}
    //总之，所有需要在组件（界面）中修改Vuex的state信息时，必须经过mutations的方法。

    /*关于响应式的说法，当修改数据后，被修改的数据所在的所有组件（界面）都会刷新
     注：在Vuejs哔哩哔哩学习\07-循环遍历\04-v-for那些数组的方法是响应式的.html中明确指出不能使用数组key值的形式替换或添加对象
    */
    //vuex的state能够响应式前提条件是 初始化的state属性 当然如果后面想添加/删除响应式的属性，可以通过Vue.set(state.info, '添加的属性名', 'value') Vue.delete(state.info, '添加的属性名', )

}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    //通常modules中的内容会被添加到根store的state中，调用时就只需要$store.state.a/b.name,而dispatch和commit则不需要额外制定模块，vue会自动寻找到相关的方法
    modules: {
        a: moduleA
    }
})

export default store