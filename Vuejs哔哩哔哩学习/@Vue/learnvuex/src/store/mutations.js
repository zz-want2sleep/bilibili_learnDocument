import * as cst from './mutation-types'
export default {
    //mutations中的方法推荐使用常量来定义方法名（事件类型） ['increment']等价于increment所以我们可以导出一个常量用于commit与方法名统一
    //方法，默认会有一个state参数,可以传递一个自定义的参数，专业术语payload 载荷
    [cst.INCREMENT](state) {
        state.count++
    },
    [cst.REDUCE](state) {
        state.count--
    },
    //payload可以使用对象来传递多个参数
    [cst.ADDCOUNT](state, payload) {
        state.count += payload.num
    },
    [cst.ADDSTU](state, payload) {
        state.stu.push(payload)
    },
    [cst.ADDPROP](state, payload) {
        //state.info['lover'] = payload做不到响应式，不能添加到响应式系统中， 例如：info中每个属性都会有一个dep对象（观察者模式）[watcher, watcher]
        Vue.set(state.info, 'lover', payload)
    },
    [cst.DELETEPROP](state) {
        // delete state.info.lover这样是做不到响应式的
        Vue.delete(state.info, 'lover')
    }
}