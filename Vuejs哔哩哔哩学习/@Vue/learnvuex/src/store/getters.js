export default {
    //也是方法，参数可以有两个，默认传入一个一个state,可选的一个getters本身,按先后顺序排列.
    // 如果有自定义参数传入，需要返回一个匿名函数，在函数中传入自定义参数
    powerCount(state) {
        return state.count * state.count
    },
    moreTwenty(state) {
        return state.stu.filter(s => s.age >= 20)
    },
    more20stuLength(state, getters) {
        return getters.moreTwenty.length
    },
    moreAgeStu(state) {
        return function(ages) {
            return state.stu.filter(s => s.age >= ages)
        }
    }
}