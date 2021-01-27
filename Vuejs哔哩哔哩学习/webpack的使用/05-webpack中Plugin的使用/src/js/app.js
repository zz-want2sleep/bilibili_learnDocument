export default {
    template: `
    <div>
    <h2>{{message}}</h2>
    <button onclick="btnClick">按钮</button>
    <h2>{{name}}</h2>
    </div>
    `,
    data: function(){
        return {message: '你好呀！', name: '凡人'}
    },
    methods: {
        btnClick: function(){

        }
    }
}