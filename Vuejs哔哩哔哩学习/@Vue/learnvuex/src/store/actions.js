export default {
        //相较于mutations和getter的方法中自带的state，context相当于new Vue.Store()对象
        //actions主要用于在commit提交mutations时做出异步处理，这样修改后的数据仍然可以被devTools工具捕获，不会出现state和界面展示的数据不一致的情况
        aUpdateCount(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit(cst.INCREMENT)
                    console.log(payload)
                    resolve(111111)
                }, 1000)
            })
        }
    }