export default {
    state: {
        name: 'wanwan',
        age: 19,
        height: 1.67
    },
    //这里面的context和根模块下面的context有所不同他指定的是当前a模块，而不是根store对象
    actions: {
        callBackfcn(context, payload) {
            //context可以用对象解构的形式进行操作，例如： {commit, dispatch, getters} = context



            // setTimeout(() => {
            //     context.commit('updateName', payload)
            //     console.log('修改数据成功')
            // }, 1000)
            console.log(context)
            return new Promise((resolve, reject) => {
                context.commit('updateName', payload)
                console.log('修改数据成功')
                resolve('111111')
            })
        }
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    getters: {
        //子模块中的getters的参数比起根模块中的getters多了一个rootState，可以用来调用根模块的state信息
        herName(state, getters, rootState) {
            return state.name + rootState.name
        }
    },
    moudules: {}//一般不会再添加多个模块了
}